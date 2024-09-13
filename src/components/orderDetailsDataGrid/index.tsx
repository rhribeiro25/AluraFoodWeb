import axios from 'axios';
import { useEffect, useState } from 'react';
import IOrder from '../../interfaces/IOrder';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {DateToDateFormated, DateToTimeFormated} from '../../utils/DateUtils';
import style from './OrderDetailDataGrid.module.scss';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function OrderDetailDataGrid() {

  const params = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8082/orders-ms/orders/${params.id}`)
      .then(resposta => {
        setOrder(resposta.data)
      })
      .catch(erro => {
        console.log(erro)
      })
    }, [params])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 75 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'description', headerName: 'Description', width: 475 },
    { field: 'quantity', headerName: 'Quantity', width: 120 },
    { field: 'actions', headerName: '', width: 125,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              console.log(cellValues.row)
            }}
          >
            Detalhes
          </Button>
        );
      },
    }
    
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  const [order, setOrder] = useState<IOrder>()
  var rows:any = [];
  if(order)
    order.orderItems?.map(
      item => 
      rows.push(
        {id: item.product.id, 
        name: item.product.name,  
        description: item.product.description,
        quantity: item.qtt,
        actions: '<Button variant="contained">Contained</Button>'
        })
      )

  return (
    <div className={style.DivDataGridOrders}>
      <Paper sx={{ height: 400, width: '75%' }}>
        <DataGrid className={style.DataGridOrders}
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}

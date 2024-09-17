import axios from 'axios';
import { useEffect, useState } from 'react';
import IOrder from '../../interfaces/IOrder';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {DateToDateFormated, DateToTimeFormated} from '../../utils/DateUtils';
import style from './OrderDataGrid.module.scss';
import { Button, Paper } from "@mui/material"
import { Link } from 'react-router-dom';

export default function OrderDataGrid() {

  useEffect(() => {
    axios.get('http://localhost:8082/orders-ms/orders')
      .then(resposta => {
        setOrders(resposta.data)
      })
      .catch(erro => {
        console.log(erro)
      })
    }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'time', headerName: 'Time', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'products', headerName: 'Products', width: 370 },
    { field: 'actions', headerName: '', width: 125,
      renderCell: (cellValues) => {
        return (
          <Link to={`/products/${cellValues.id}`}>Detalhes</Link>
        );
      },
    }
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  const [orders, setOrders] = useState<IOrder[]>([])
  var rows:any = [];
  orders?.map(
  order => 
    rows.push(
      {id: order.id, 
      date: DateToDateFormated(order.orderDate), 
      time: DateToTimeFormated(order.orderDate),  
      status: order.orderStatus,
      products: order.orderItems.length,
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

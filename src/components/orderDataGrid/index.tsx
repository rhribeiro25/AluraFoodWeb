import axios from 'axios';
import { useEffect, useState } from 'react';
import IOrder from '../../interfaces/IOrder';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {DateToDateFormated, DateToTimeFormated} from '../../utils/DateUtils';
import style from './OrderDataGrid.module.scss';

export default function OrderDataGrid() {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 115 },
    { field: 'date', headerName: 'Date', width: 165 },
    { field: 'time', headerName: 'Time', width: 165 },
    { field: 'status', headerName: 'Status', width: 165 },
    { field: 'products', headerName: 'Products', width: 165 }
    
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  const [orders, setOrders] = useState<IOrder[]>([])
  var rows:any = [];
  {orders?.map(
    order => 
      rows.push(
        {id: order.id, 
          date: DateToDateFormated(order.orderDate), 
          time: DateToTimeFormated(order.orderDate),  
          status: order.orderStatus,
          products: order.orderItems.length
        })
    )
  }

  useEffect(() => {
    axios.get('http://localhost:8082/orders-ms/orders')
      .then(resposta => {
        setOrders(resposta.data)
      })
      .catch(erro => {
        console.log(erro)
      })
    }, [])
    
    return (
      <div className={style.DivDataGridOrders}>
        <Paper sx={{ height: 400, width: '60%' }}>
          <DataGrid className={style.DataGridOrders}
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </div>
    )
}

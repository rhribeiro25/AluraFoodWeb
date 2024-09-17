import { GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import OrderClient from '../client/orderClient';
import { DateToDateFormated, DateToTimeFormated } from '../utils/DateUtils';


export default class OrderService {

  static async getDataGridProps(){
    var orders = await OrderClient.findAll()
    
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
      var rows : any = [];
      orders.forEach(
        order => 
        rows.push(
          {id: order.id, 
          date: DateToDateFormated(order.orderDate), 
          time: DateToTimeFormated(order.orderDate),  
          status: order.orderStatus,
          products: order.orderItems.length,
          })
      )
  
      return { papersx: { height: 400, width: '75%' }, rows: rows, columns:columns, paginationModel: paginationModel, pageSizeOptions: [5, 10] };

  }

}
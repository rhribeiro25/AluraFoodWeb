import { DataGrid } from '@mui/x-data-grid';
import style from './CustomDataGrid.module.scss';
import { Paper } from "@mui/material"

export default function CustomDataGrid(props: any) {

  return (
    <div className={style.DivDataGrid}>
      <Paper sx={props.papersx}>
        <DataGrid className={style.DataGrid}
          rows={props.rows}
          columns={props.columns}
          initialState={props.paginationModel}
          pageSizeOptions={props.pageSizeOptions}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}

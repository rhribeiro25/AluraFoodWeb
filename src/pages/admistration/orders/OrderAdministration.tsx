import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import IOrder from "../../../interfaces/IOrder"

import { Link as RouterLink } from 'react-router-dom'

const OrderAdministration = () => {

    const [orders, setOrders] = useState<IOrder[]>([])

    useEffect(() => {
        http.get<IOrder[]>('orders/')
            .then(resposta => setOrders(resposta.data))
    }, [])

    const excluir = (orderAhSerExcluido: IOrder) => {
        http.delete(`orders/${orderAhSerExcluido.id}/`)
            .then(() => {
                const listaOrder = orders.filter(order => order.id !== orderAhSerExcluido.id)
                setOrders([...listaOrder])
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map(order => <TableRow key={order.id}>
                        <TableCell>
                            {order.id}
                        </TableCell>
                        <TableCell>
                            [ <RouterLink to={`/admin/orders/${order.id}`}>editar</RouterLink> ]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(order)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderAdministration
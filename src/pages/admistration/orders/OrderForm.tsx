import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../../http"
import IOrder from "../../../interfaces/IOrder"

const OrderForm = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            http.get<IOrder>(`orders/${parametros.id}/`)
                // .then(resposta => setNomeOrder(resposta.data.nome))
        }
    }, [parametros])

    const [nomeOrder, setNomeOrder] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            http.put(`orders/${parametros.id}/`, {
                nome: nomeOrder
            })
                .then(() => {
                    alert("Order atualizado com sucesso!")
                })
        } else {
            http.post('orders/', {
                nome: nomeOrder
            })
                .then(() => {
                    alert("Order cadastrado com sucesso!")
                })
        }

    }

    return (
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de Orders</Typography>
            <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                <TextField
                    value={nomeOrder}
                    onChange={evento => setNomeOrder(evento.target.value)}
                    label="Nome do Order"
                    variant="standard"
                    fullWidth
                    required
                />
                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
    )
}

export default OrderForm
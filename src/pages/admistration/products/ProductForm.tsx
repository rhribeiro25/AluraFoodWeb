import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import IOrder from "../../../interfaces/IOrder"
import ITag from "../../../interfaces/ITag"

const ProductForm = () => {

    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')

    const [tag, setTag] = useState('')
    const [order, setOrder] = useState('')

    const [imagem, setImagem] = useState<File | null>(null)

    const [tags, setTags] = useState<ITag[]>([])
    const [orders, setOrders] = useState<IOrder[]>([])

    useEffect(() => {
        http.get<{ tags: ITag[] }>('tags/')
            .then(resposta => setTags(resposta.data.tags))
        http.get<IOrder[]>('orders/')
            .then(resposta => setOrders(resposta.data))
    }, [])

    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }   

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const formData = new FormData();

        formData.append('nome', nomePrato)
        formData.append('descricao', descricao)

        formData.append('tag', tag)

        formData.append('order', order)

        if (imagem) {
            formData.append('imagem', imagem)
        }

        http.request({
            url: 'products/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(() => {
                setNomePrato('')
                setDescricao('')
                setTag('')
                setOrder('')
                alert('Prato cadastrado com sucesso!')
            })
            .catch(erro => console.log(erro))

    }

    return (
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de Products</Typography>
            <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                <TextField
                    value={nomePrato}
                    onChange={evento => setNomePrato(evento.target.value)}
                    label="Nome do Prato"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={descricao}
                    onChange={evento => setDescricao(evento.target.value)}
                    label="Descrição do Prato"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />

                <FormControl margin="dense" fullWidth >
                    <InputLabel id="select-tag">Tag</InputLabel>
                    <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
                        {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>
                            {tag.value}
                        </MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl margin="dense" fullWidth >
                    <InputLabel id="select-order">Order</InputLabel>
                    <Select labelId="select-order" value={order} onChange={evento => setOrder(evento.target.value)}>
                        {orders.map(order => <MenuItem key={order.id} value={order.id}>
                            {order.id}
                        </MenuItem>)}
                    </Select>
                </FormControl>

                <input type="file" onChange={selecionarArquivo}/>

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
    )
}

export default ProductForm
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import IPrato from "../../../interfaces/IProduct"

import { Link as RouterLink } from 'react-router-dom'

const ProductAdministration = () => {

    const [products, setProducts] = useState<IPrato[]>([])

    useEffect(() => {
        http.get<IPrato[]>('products/')
            .then(resposta => setProducts(resposta.data))
    }, [])

    const excluir = (productAhSerExcluido: IPrato) => {
        http.delete(`products/${productAhSerExcluido.id}/`)
            .then(() => {
                const listaProducts = products.filter(product => product.id !== productAhSerExcluido.id)
                setProducts([...listaProducts])
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
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
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
                    {products.map(product => <TableRow key={product.id}>
                        <TableCell>
                            {product.name}
                        </TableCell>
                        <TableCell>
                            {product.id}
                        </TableCell>
                        <TableCell>
                            [<a href={product.description} target="_blank" rel="noreferrer">ver imagem</a>]
                        </TableCell>
                        <TableCell>
                            [ <RouterLink to={`/admin/products/${product.id}`}>editar</RouterLink> ]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(product)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductAdministration
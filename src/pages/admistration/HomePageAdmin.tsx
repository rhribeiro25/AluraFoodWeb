import { Box, Button, Typography, AppBar, Container, Toolbar, Link, Paper } from "@mui/material"

import { Link as RouterLink, Outlet } from 'react-router-dom'

const HomePageAdmin = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6">
                            Administração
                        </Typography>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <Link component={RouterLink} to="/admin/orders">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Orders
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/orders/novo">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Order
                                </Button>
                            </Link>

                            <Link component={RouterLink} to="/admin/products">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Products
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/products/novo">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Prato
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default HomePageAdmin
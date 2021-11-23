import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'

interface IHeaderProps {
    darkMode: boolean;
    handleThemeChange: () => void
}

const Header: FC<IHeaderProps> = ({
    darkMode, handleThemeChange
}) => {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant="h6">
                    Re-Store
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
            </Toolbar>

        </AppBar>
    )
}

export default Header

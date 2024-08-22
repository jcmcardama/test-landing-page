import React, { useState } from 'react';
import { AppBar, Avatar, Box, Button, Container, Toolbar, styled } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(() => {
    return {
        position: 'static'
    };
});

const StyledToolbar = styled(Toolbar)(() => {
    return {
        justifyContent: 'space-between'
    };
});

const StyledTabs = styled(Tabs)((theme) => {
    return {
        "& .MuiTabs-indicator": {
            backgroundColor: theme.theme.palette.background.default
        }
    };
});

const Header = () => {
    const [tabsValue, setTabsValue] = useState(0);
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabsValue(newValue);
    };

    return (
        <StyledAppBar>
            <Container>
                <StyledToolbar>
                    <Button to={'/'} component={Link} >
                        <Avatar alt="carlo logo" src="src\assets\my-logo.png" />
                    </Button>
                    <Box>
                        <StyledTabs
                            value={tabsValue}
                            onChange={handleChange}
                            textColor="inherit"
                        >
                            <Tab label="About" value={1} to={'/about'} component={Link} />
                            <Tab label="Skills" value={2} to={'/skills'} component={Link} />
                            <Tab label="Projects" value={3} to={'/projects'} component={Link} />
                            <Tab label="Contact" value={4} to={'/contact'} component={Link} />
                        </StyledTabs>
                    </Box>
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
};

export default Header;

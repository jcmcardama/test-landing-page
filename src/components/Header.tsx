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
    const [tabsValue, setTabsValue] = useState('/');
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setTabsValue(newValue);
    };

    return (
        <StyledAppBar>
            <Container>
                <StyledToolbar>
                    <Button 
                        to={'/'} 
                        component={Link}
                        onClick={() => {
                            setTabsValue('/');
                        }}
                    >
                        <Avatar alt="carlo logo" src="src\assets\my-logo.png" />
                    </Button>
                    <Box>
                        <StyledTabs
                            value={tabsValue}
                            onChange={handleChange}
                            textColor="inherit"
                        >
                            <Tab label="About" value={'/about'} to={'/about'} component={Link} />
                            <Tab label="Skills" value={'/skills'} to={'/skills'} component={Link} />
                            <Tab label="Projects" value={'/projects'} to={'/projects'} component={Link} />
                            <Tab label="Contact" value={'/contact'} to={'/contact'} component={Link} />
                        </StyledTabs>
                    </Box>
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
};

export default Header;

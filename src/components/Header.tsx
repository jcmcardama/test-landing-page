import React, { useState } from 'react';
import { AppBar, Avatar, Box, Button, Container, Toolbar, styled } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
    const [value, setValue] = useState(1);
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledAppBar>
            <Container>
                <StyledToolbar>
                    <Button>
                        <Avatar alt="carlo logo" src="src\assets\my-logo.png" />
                    </Button>
                    <Box>
                        <StyledTabs
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                        >
                            <Tab label="About" value={1} />
                            <Tab label="Skills" value={2} />
                            <Tab label="Projects" value={3} />
                            <Tab label="Contact" value={4} />
                        </StyledTabs>
                    </Box>
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
};

export default Header;

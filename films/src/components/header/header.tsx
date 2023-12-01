import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Header = ({ title }: { title: string }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="h1">
            {title}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

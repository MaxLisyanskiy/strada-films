import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import mockImg from '../../assets/card-mock-img.jpg';

export const CardItem = () => {
  return (
    <Card>
      <CardMedia sx={{ height: 240 }} image={mockImg} title="card-item-mock" />
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6">Терминатор 3</Typography>
          <Typography
            sx={{ fontSize: 16 }}
            color="text.secondary"
            component="span"
          >
            Рейтинг 9
          </Typography>
        </Box>
        <IconButton edge="end" aria-label="rating">
          <StarBorderSharpIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

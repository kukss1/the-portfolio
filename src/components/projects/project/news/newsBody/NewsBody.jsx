import { styled } from '@mui/material';
import { Typography, Link, Box, Grid } from '@mui/material';

const NewsBodyWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
}));

const NewsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
}));

const NewsLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  margin:'1rem',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const NewsText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '1rem',
}));

function NewsBody({ articles }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <NewsTitle variant="h4">Breaking News</NewsTitle>
      <NewsBodyWrapper container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <NewsLink href={article.webUrl} target="_blank" rel="noreferrer">
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {article.webTitle}
              </Typography>
            </NewsLink>
            <NewsText variant="body2">{article.fields?.trailText}</NewsText>
          </Grid>
        ))}
      </NewsBodyWrapper>
    </Box>
  );
}

export default NewsBody;

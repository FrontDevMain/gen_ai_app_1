import { Divider, Stack } from '@mui/material';
import SearchBar from './SearchBar';
import HeaderDashboard from './HeaderDashboard';
import fetcher from 'src/api/fetcher';
import { END_POINTS } from 'src/api/EndPoints';
import { useEffect } from 'react';

function MainDashboard() {
  const me = async () => {
    try {
      const Response = await fetcher.get(END_POINTS.AUTH.USER_DETAILS);
      console.log(Response);
    } catch (err) {
      console.log(err.detail);
    }
  };

  useEffect(() => {
    me();
  }, []);

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <HeaderDashboard />
      <Divider sx={{ my: 1 }} />
      <SearchBar />
    </div>
  );
}

export default MainDashboard;

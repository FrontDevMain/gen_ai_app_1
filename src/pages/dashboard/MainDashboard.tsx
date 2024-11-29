import { Divider, Stack } from '@mui/material';
import SearchBar from './SearchBar';
import HeaderDashboard from './HeaderDashboard';

function MainDashboard() {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <HeaderDashboard />
      <Divider sx={{ my: 1 }} />
      <SearchBar />
    </div>
  );
}

export default MainDashboard;

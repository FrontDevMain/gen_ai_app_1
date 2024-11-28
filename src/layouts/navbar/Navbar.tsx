import {
  Box,
  Collapse,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Navbar() {
  const theme = useTheme();
  const [active, setActive] = useState({ item: 'Notebook', subItem: 'Chat 1' });

  const [navbarList, setNavbarList] = useState([
    {
      segment: 'Notebook',
      title: 'Notebook',
      icon: '',
      children: [
        {
          segment: 'Chat 1',
          title: 'Chat 1',
          icon: '',
        },
        {
          segment: 'Chat 2',
          title: 'Chat 2',
          icon: '',
        },
        {
          segment: 'Chat 3',
          title: 'Chat 3',
          icon: '',
        },
      ],
    },
    {
      segment: 'Archive',
      title: 'Archive',
      icon: '',
      children: [
        {
          segment: 'Chat 1',
          title: 'Chat 1',
          icon: '',
        },
        {
          segment: 'Chat 2',
          title: 'Chat 2',
          icon: '',
        },
        {
          segment: 'Chat 3',
          title: 'Chat 3',
          icon: '',
        },
      ],
    },
  ]);

  return (
    <Box sx={{ overflow: 'auto', backgroundColor: theme.palette.background.default }}>
      <List
        sx={{ maxWidth: 360, bgcolor: theme.palette.background.default }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {navbarList.map((item) => {
          return <NavbarItems key={item.title} item={item} active={active} setActive={setActive} />;
        })}
      </List>
    </Box>
  );
}

function NavbarItems({ item, active, setActive }: any) {
  const theme = useTheme();
  const [open, setOpen] = useState(active.item == item.title);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleActive = (item: '', subItem: '') => {
    console.log(item, subItem);
    setActive({
      item: item,
      subItem: subItem,
    });
  };

  const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius, // Rounded corners
    marginBottom: theme.spacing(1), // Spacing between items
    padding: theme.spacing(1.5),
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: theme.palette.primary.main, // Hover background
      color: theme.palette.background.default, // Selected text color
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main, // Selected background
      color: theme.palette.background.default, // Selected text color
      '&:hover': {
        backgroundColor: theme.palette.primary.dark, // Darker on hover when selected
        color: theme.palette.background.default, // Selected text color
      },
    },
  }));

  const CustomListSubItemButton = styled(ListItemButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius, // Rounded corners
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    '&:hover': {
      color: theme.palette.primary.main, // Selected text color
    },
    '&.Mui-selected': {
      color: theme.palette.primary.main, // Selected text color
      '&:hover': {
        color: theme.palette.primary.main, // Darker on hover when selected
      },
    },
  }));

  return (
    <Box key={item.title}>
      {' '}
      <CustomListItemButton
        onClick={() => {
          handleClick();
          handleActive(item.title, '');
        }}
        selected={active.item == item.title}
      >
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </CustomListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {item.children.map((child: any) => (
          <List
            component="div"
            disablePadding
            onClick={() => handleActive(item.title, child.title)}
          >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
              <CustomListSubItemButton
                sx={{ pl: 4 }}
                selected={active.item == item.title && active.subItem == child.title}
              >
                <ListItemText primary={child.title} />
              </CustomListSubItemButton>
              <IconButton>
                <Icon>
                  <MoreVertIcon />
                </Icon>
              </IconButton>
            </Stack>
          </List>
        ))}
      </Collapse>
    </Box>
  );
}

export default Navbar;

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    borderRadius: '25px',
    alignSelf: 'center',
    margin: '2rem 0 0rem',
    boxShadow: 'none',
    border: '1px solid'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase(props) {
  const { search, searchState, setSearchState, setResult } = props;
  const classes = useStyles();
  const [content, setContent] = useState('');

  const handleChange = (e) =>  {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (content == '') setSearchState(false);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchState(true);
    setResult(search(content));
  }

  const handleCloseButton = () => {
    setSearchState(false);
    setResult(false);
    setContent('');
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
        <InputBase
            className={classes.input}
            placeholder="Search Resource"
            value={content}
            inputProps={{ 'aria-label': 'search resource', onChange: handleChange }}
        />
        {searchState && <IconButton className={classes.iconButton} aria-label="closeSearch"
                                    onClick={handleCloseButton}>
                            <Close />
                        </IconButton>}
        <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
        </IconButton>
    </Paper>
  );
}
import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import AppMainContent from '../../../components/app-main-content/app-main-content';
import TableWrapper from '../../../components/TableWrapper/TableWrapper';
import Tile from 'components/Tile/Tile';
import styles from "./style.module.css";
import SearchAndFilterWrapper from 'components/SearchAndFilterWrapper/SearchAndFilterWrapper';

const Companies = () => {
  const columns = [
    { id: 'company', label: 'COMPANY', minWidth: 200 },
    {
      id: 'email', label: 'EMAIL', minWidth: 100, align: 'left',
    },
    { id: 'name', label: 'PHONE', minWidth: 180 },
    {
      id: 'address',
      label: 'ADDRESS',
      minWidth: 400,
      align: 'left',
    },
    {
      id: 'size',
      label: 'ACTION',
      minWidth: 50,
      align: 'left',
    },
  ];

  function createData(company, email, name, address, size) {
    return {
      company, email, name, address, size,
    };
  }

  const rows = [
    createData(<span className="bold">Fine Art print limited</span>, 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData(<span className="bold">Fine Art print limited</span>, 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Shiny colours print limited', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Shiny colours print limited', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
    createData('Shiny colours print limited', 'example@email.com', '+233548086391', 'Kokomlemle - Accra', <Link to="/companies/1"><Button content="Manage" basic size="mini" /></Link>),
  ];

  return (
  <>
    <SearchAndFilterWrapper
      filterComponent={<div>Filter</div>}
      actionComponent={<div>
        <Button
          positive
          size="small"
        >
          <NavLink to="/companies/new" exact className={styles.link}>
            <span className="">Add new</span>
          </NavLink>
        </Button>
      </div>}
    />
    <AppMainContent
      parentClasses="app-pad"
      mainClasses="very large container center m-t-20"
    >
      {rows && rows.map((row) => (
        <div className={styles.wrapper}>
          <Tile>
            <Grid>
              <Grid.Column width={12}>
                <h3>Hub KB.S Company Limited</h3>
                <p>
                  <div>0548086344</div>
                  <div>example@email.com</div>
                  <div>Cirlce, Kokomlemle</div>
                </p>
              </Grid.Column>
              <Grid.Column width={4}>
                <div className="text-right">
                  <Button
                    positive
                    size="small"
                    className={styles.cta}
                  >
                    <NavLink to="/companies/1" exact className="link">
                      <span className="">Manage</span>
                    </NavLink>
                  </Button>
                </div>
              </Grid.Column>
            </Grid>
          </Tile>
        </div>
      ))}
    </AppMainContent>
  </>
  );
};

export default Companies;

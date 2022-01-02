import React, { useState, useEffect, useCallback } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import AppMainContent from 'components/app-main-content/app-main-content';
import Tile from 'components/Tile/Tile';
import styles from "./style.module.css";
import SearchAndFilterWrapper from 'components/SearchAndFilterWrapper/SearchAndFilterWrapper';
import { getpreferredCompanies } from 'apiService/customer';
import { useDispatch } from 'react-redux';
import { setAppProgress } from 'redux/slices/app';


const Companies = () => {
  const [preferredCompanies, setPrefferedCompanies] = useState([]);
  const dispatch = useDispatch();

  const loadCustomerPreferredCompanies = useCallback(async() => {
    try {
      const response = await getpreferredCompanies((progress) => dispatch(setAppProgress(progress)));
      setPrefferedCompanies(response.data.preferredCompanies);
    } catch (error) {}
  }, [dispatch]);

  useEffect(() => {
    loadCustomerPreferredCompanies();
  }, [loadCustomerPreferredCompanies])

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
      {preferredCompanies.map((company) => (
        <div className={styles.wrapper} key={company._id}>
          <Tile>
            <Grid>
              <Grid.Column width={12}>
                <h3>{company.name}</h3>
                <p>
                  <div>{company.phone}</div>
                  <div>{company.email}</div>
                </p>
              </Grid.Column>
              <Grid.Column width={4}>
                <div className="text-right">
                  <Button
                    positive
                    size="small"
                    className={styles.cta}
                  >
                    <NavLink to={`/companies/${company._id}`} exact className="link">
                      <span className="">View</span>
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

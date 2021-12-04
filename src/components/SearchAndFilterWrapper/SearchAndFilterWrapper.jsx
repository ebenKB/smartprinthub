import React from 'react';
import './SearchAndFilterWrapper.scss';
import { PropTypes } from 'prop-types';
import SearchInputLite from '../form-fields/SearchInputLite/SearchInputLite';
import { Grid } from 'semantic-ui-react';

const SearchAndFilterWrapper = ({ filterComponent, actionComponent,canSearch=true, canFilter=true  }) => (
	<>
	<div className="search-filter__wrapper">
		<Grid>
			<Grid.Row>
				<Grid.Column width={12}>
					{/* {children} */}
					{/* <span className="v-divider" /> */}
					<Grid>
						{canFilter && (
							<Grid.Column>
								{filterComponent}
							</Grid.Column>
						)}
						{canSearch && (
							<Grid.Column>
								<SearchInputLite />
							</Grid.Column>
						)}
					</Grid>
				</Grid.Column>
				<Grid.Column width={4}>
					{actionComponent}
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</div>
	<div className="app_bar__offset" />
	</>
);

SearchAndFilterWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SearchAndFilterWrapper;

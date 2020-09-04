import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import RoundContentWrapper from '../../../components/RoundContentWrapper/RoundContentWrapper';
import './BusinessSettingsTab.scss';
import Divider from '../../../components/divider/divider';
import Logo from '../../../images/smartprintlogo.png';
import FileInput from '../../../components/form-fields/FileInput/FileInput';
// import { ReactComponent as YellowStar } from '../../../svg/yellow-star.svg';
// import { ReactComponent as DarkStar } from '../../../svg/dark-star.svg';

const CompanySettings = () => {
  const [company] = useState({
    name: 'Alison and Sons',
    address: 'Circle - Accra',
    email: 'example@email.com',
    phone: '+233548086391',
    gps: 'GC-68-090',
    website: 'www.example.com',
    supportEmail: 'support@company.com',
    landmark: 'Behind the filling station',
    linkedin: 'https://linkedin.com/me/companyname/',
  });

  const handleInputChange = () => {
    console.log('The input has changed');
  };

  return (
	<div className="business-tab__wrapper m-t-40 m-b-40">
		<RoundContentWrapper
			heading="Company settings"
			classes="opaque"
			isRounded
		>
			{/* <div className="m-t-10 text-right">
				<YellowStar className="medium icon" />
				<YellowStar className="medium icon" />
				<YellowStar className="medium icon" />
				<YellowStar className="medium icon" />
				<DarkStar className="medium icon" />
				<div className="xsm-caption">View user ratings</div>
			</div> */}
			<section className="m-t-20">
				<Form>
					<Form.Input
						label="Legal Company name"
						type="text"
						placeholder="Company name"
						value={company.name}
						name="firstname"
						onChange={(e) => handleInputChange(e)}
					/>
					<div className="input-caption pad">
						Your legal business name is the official name of your company.
						It should be the same as the name on your registration documents
					</div>
					<Form.Group widths="equal">
						<Form.Input
							label="Location"
							type="text"
							placeholder="Location"
							value={company.address}
							name="location"
							onChange={(e) => handleInputChange(e)}
						/>
						<Form.Input
							label="Closest Landmark"
							type="text"
							placeholder="Landmark"
							value={company.landmark}
							name="location"
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Group>
					<Form.Input
						type="text"
						placeholder="Email"
						value={company.email}
						name="email"
						label="Email"
						onChange={(e) => handleInputChange(e)}
					/>
					<div className="input-caption pad">
						This is the general email for your company. All notifications are sent to this email.
					</div>
					<Form.Group widths="equal">
						<Form.Input
							type="text"
							placeholder="Phone"
							value={company.phone}
							name="phone"
							label="Phone"
							onChange={(e) => handleInputChange(e)}
						/>
						<Form.Input
							type="text"
							placeholder="GPS Address"
							value={company.gps}
							label="GPS Address"
						/>
					</Form.Group>
					<Form.Input
						type="text"
						placeholder="Company Identification Number"
						value={company.gps}
						label="Company Identification Number"
					/>
					<Form.Input
						type="text"
						placeholder="Website"
						value={company.website}
						label="Website"
					/>
					<Form.Input
						type="text"
						placeholder="Support Email"
						value={company.supportEmail}
						label="Support Email"
					/>
					<div className="input-caption pad">
						This is the support email for your company.
						All support information are sent to this email.
					</div>
					<Divider title="Social networks" type="thick" classes="m-t-30 m-b-30" />
					<Form.Input
						label="Linkedin Address"
						type="text"
						placeholder="Enter your Linkedin Url"
						value={company.linkedin}
						name="location"
						onChange={(e) => handleInputChange(e)}
					/>
				</Form>
			</section>
			<div className="m-t-40 text-right">
				<Button
					positive
					content="Save"
					size="small"
				/>
			</div>
		</RoundContentWrapper>
		<div>
			<RoundContentWrapper
				heading="Business Logo"
				classes="opaque"
				isRounded
			>
				<div className="sm-caption m-t-20">
					Please make sure that your image fits well on all backgrounds.
				</div>
				<div className="text-center m-t-20">
					<img src={Logo} alt="" className="medium fluid logo" />
				</div>
				<div className="m-t-30">
					<FileInput maxSize="512kb" />
				</div>
			</RoundContentWrapper>
		</div>
	</div>
  );
};

export default CompanySettings;

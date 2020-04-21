import { conditionToColor, Tooth } from "@modules";
import { observer } from "mobx-react";
import * as React from "react";

@observer
export class TeethPermanentChart extends React.Component<
	{
		teeth: Tooth[];
		onClick: (ISONumber: number) => void;
	},
	{}
> {
	render() {
		
			let diag18;
			if(this.props.teeth[18].diagnosis_key){
				diag18 =  <React.Fragment> <rect x="1800" y="3450" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='1800' y='3600' fill='#fff' fontSize='200'>{this.props.teeth[18].diagnosis_key}</text></React.Fragment> 
			}

			let diag17;
			if(this.props.teeth[17].diagnosis_key){
				diag17 =  <React.Fragment> <rect x="2850" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='2850' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[17].diagnosis_key}</text></React.Fragment> 
			}

			let diag16;
			if(this.props.teeth[16].diagnosis_key){
				diag16 =  <React.Fragment> <rect x="3900" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='3900' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[16].diagnosis_key}</text></React.Fragment> 
			}

			let diag15;
			if(this.props.teeth[15].diagnosis_key){
				diag15 =  <React.Fragment> <rect x="4850" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='4850' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[15].diagnosis_key}</text></React.Fragment> 
			}

			let diag14;
			if(this.props.teeth[14].diagnosis_key){
				diag14 =  <React.Fragment> <rect x="5650" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='5650' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[14].diagnosis_key}</text></React.Fragment> 
			}

			let diag13;
			if(this.props.teeth[13].diagnosis_key){
				diag13 =  <React.Fragment> <rect x="6150" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='6150' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[13].diagnosis_key}</text></React.Fragment> 
			}

			let diag12;
			if(this.props.teeth[12].diagnosis_key){
				diag12 =  <React.Fragment> <rect x="6800" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='6800' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[12].diagnosis_key}</text></React.Fragment> 
			}

			let diag11;
			if(this.props.teeth[11].diagnosis_key){
				diag11 =  <React.Fragment> <rect x="7700" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='7700' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[11].diagnosis_key}</text></React.Fragment> 
			}

			///

			let diag21;
			if(this.props.teeth[21].diagnosis_key){
				diag21 =  <React.Fragment> <rect x="8400" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='8400' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[21].diagnosis_key}</text></React.Fragment> 
			}

			let diag22;
			if(this.props.teeth[22].diagnosis_key){
				diag22 =  <React.Fragment> <rect x="9200" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='9200' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[22].diagnosis_key}</text></React.Fragment> 
			}

			let diag23;
			if(this.props.teeth[23].diagnosis_key){
				diag23 =  <React.Fragment> <rect x="9900" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='9900' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[23].diagnosis_key}</text></React.Fragment> 
			}

			let diag24;
			if(this.props.teeth[24].diagnosis_key){
				diag24 =  <React.Fragment> <rect x="10600" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='10600' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[24].diagnosis_key}</text></React.Fragment> 
			}

			let diag25;
			if(this.props.teeth[25].diagnosis_key){
				diag25 =  <React.Fragment> <rect x="11400" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='11400' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[25].diagnosis_key}</text></React.Fragment> 
			}

			let diag26;
			if(this.props.teeth[26].diagnosis_key){
				diag26 =  <React.Fragment> <rect x="12200" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='12200' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[26].diagnosis_key}</text></React.Fragment> 
			}

			let diag27;
			if(this.props.teeth[27].diagnosis_key){
				diag27 =  <React.Fragment> <rect x="13200" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='13200' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[27].diagnosis_key}</text></React.Fragment> 
			}

			let diag28;
			if(this.props.teeth[28].diagnosis_key){
				diag28 =  <React.Fragment> <rect x="14400" y="3350" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='14400' y='3500' fill='#fff' fontSize='200'>{this.props.teeth[28].diagnosis_key}</text></React.Fragment> 
			}

			//
			let diag38;
			if(this.props.teeth[38].diagnosis_key){
				diag38 =  <React.Fragment> <rect x="1800" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='1800' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[38].diagnosis_key}</text></React.Fragment> 
			}

			let diag37;
			if(this.props.teeth[37].diagnosis_key){
				diag37 =  <React.Fragment> <rect x="2800" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='2800' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[37].diagnosis_key}</text></React.Fragment> 
			}

			let diag36;
			if(this.props.teeth[36].diagnosis_key){
				diag36 =  <React.Fragment> <rect x="4300" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='4300' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[36].diagnosis_key}</text></React.Fragment> 
			}

			let diag35;
			if(this.props.teeth[35].diagnosis_key){
				diag35 =  <React.Fragment> <rect x="5200" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='5200' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[35].diagnosis_key}</text></React.Fragment> 
			}

			let diag34;
			if(this.props.teeth[34].diagnosis_key){
				diag34 =  <React.Fragment> <rect x="6000" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='6000' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[34].diagnosis_key}</text></React.Fragment> 
			}

			let diag33;
			if(this.props.teeth[33].diagnosis_key){
				diag33 =  <React.Fragment> <rect x="6600" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='6600' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[33].diagnosis_key}</text></React.Fragment> 
			}

			let diag32;
			if(this.props.teeth[32].diagnosis_key){
				diag32 =  <React.Fragment> <rect x="7200" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='7200' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[32].diagnosis_key}</text></React.Fragment> 
			}

			let diag31;
			if(this.props.teeth[31].diagnosis_key){
				diag31 =  <React.Fragment> <rect x="7900" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='7900' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[31].diagnosis_key}</text></React.Fragment> 
			}

			let diag41;
			if(this.props.teeth[41].diagnosis_key){
				diag41 =  <React.Fragment> <rect x="8500" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='8500' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[41].diagnosis_key}</text></React.Fragment> 
			}

			let diag42;
			if(this.props.teeth[42].diagnosis_key){
				diag42 =  <React.Fragment> <rect x="9100" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='9100' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[42].diagnosis_key}</text></React.Fragment> 
			}

			let diag43;
			if(this.props.teeth[43].diagnosis_key){
				diag43 =  <React.Fragment> <rect x="9700" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='9700' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[43].diagnosis_key}</text></React.Fragment> 
			}

			let diag44;
			if(this.props.teeth[44].diagnosis_key){
				diag44 =  <React.Fragment> <rect x="10300" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='10300' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[44].diagnosis_key}</text></React.Fragment> 
			}

			let diag45;
			if(this.props.teeth[45].diagnosis_key){
				diag45 =  <React.Fragment> <rect x="11100" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='11100' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[45].diagnosis_key}</text></React.Fragment> 
			}

			let diag46;
			if(this.props.teeth[46].diagnosis_key){
				diag46 =  <React.Fragment> <rect x="12100" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='12100' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[46].diagnosis_key}</text></React.Fragment> 
			}

			let diag47;
			if(this.props.teeth[47].diagnosis_key){
				diag47 =  <React.Fragment> <rect x="13500" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='13500' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[47].diagnosis_key}</text></React.Fragment> 
			}

			let diag48;
			if(this.props.teeth[48].diagnosis_key){
				diag48 =  <React.Fragment> <rect x="14600" y="11750" fill="red" width="550" height="200" style={{ stroke: 'red', strokeWidth: 25, opacity: 1}}> </rect> <text x='14600' y='11900' fill='#fff' fontSize='200'>{this.props.teeth[48].diagnosis_key}</text></React.Fragment> 
			}
		

		return (
			<>
<svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 16383 15308.7"
      xmlSpace="preserve"
    >

<path fill='none' d='M-1 -1H581V401H-1z'></path>
      <text x='1800' y='3900' fill='#333' fontSize='250'>
        1
      </text>
	  {diag18}

      <text x='2850' y='3700' fill='#333' fontSize='250'>
        2
      </text>
	  {diag17}
      
	  <text x='3900' y='3800' fill='#333' fontSize='250'>
        3
      </text>
	  {diag16}	   
	
      <text x='4850' y='3750' fill='#333' fontSize='250'>
        4
      </text>
	  {diag15}	 

      <text x='5650' y='3850' fill='#333' fontSize='250'>
        5
      </text>
	  {diag14}

      <text x='6150' y='3800' fill='#333' fontSize='250'>
        6
      </text>
	  {diag13}

      <text x='6800' y='4000' fill='#333' fontSize='250'>
        7
      </text>
	  {diag12}

      <text x='7700' y='4100' fill='#333' fontSize='250'>
        8
      </text>
	  {diag11}

      <text x='8400' y='4100' fill='#333' fontSize='250'>
        9
      </text>
	  {diag21}

      <text x='9200' y='4100' fill='#333' fontSize='250'>
        10
      </text>


	  {diag22}

      <text x='9900' y='4000' fill='#333' fontSize='250'>
        11
      </text>
	  {diag23}

      <text x='10600' y='4000' fill='#333' fontSize='250'>
        12
      </text>
	  {diag24}		

      <text x='11400' y='3800' fill='#333' fontSize='250'>
        13
      </text>
	  {diag25}	

      <text x='12200' y='3800' fill='#333' fontSize='250'>
        14
      </text>
	  {diag26}

      <text x='13200' y='3800' fill='#333' fontSize='250'>
        15
      </text>
	  {diag27}

      <text x='14400' y='3800' fill='#333' fontSize='250'>
        16
      </text>
	  {diag28}

      <text x='14600' y='11700' fill='#333' fontSize='250'>
        17
      </text>
	  {diag48}

      <text x='13500' y='11700' fill='#333' fontSize='250'>
        18
      </text>
	  {diag47}

      <text x='12100' y='11700' fill='#333' fontSize='250'>
        19
      </text>
	  {diag46}

      <text x='11100' y='11700' fill='#333' fontSize='250'>
        20
      </text>
	  {diag45}

      <text x='10300' y='11700' fill='#333' fontSize='250'>
        21
      </text>
	  {diag44}

      <text x='9700' y='11700' fill='#333' fontSize='250'>
        22
      </text>
	  {diag43}
	 

      <text x='9100' y='11700' fill='#333' fontSize='250'>
        23
      </text>
	  {diag42}

      <text x='8500' y='11700' fill='#333' fontSize='250'>
        24
      </text>
	  {diag41}
	  //

      <text x='7900' y='11700' fill='#333' fontSize='250'>
        25
      </text>
	  {diag31}

      <text x='7200' y='11691.667' fill='#333' fontSize='250'>
        26
      </text>
	  {diag32}

      <text x='6600' y='11700' fill='#333' fontSize='250'>
        27
      </text>
	  {diag33}

      <text x='6000' y='11700' fill='#333' fontSize='250'>
        28
      </text>
	  {diag34}

      <text x='5200' y='11700' fill='#333' fontSize='250'>
        29
      </text>
	  {diag35}

      <text x='4300' y='11700' fill='#333' fontSize='250'>
        30
      </text>
	  {diag36}

      <text x='2800' y='11700' fill='#333' fontSize='250'>
        31
      </text>
 	  {diag37}

	  <text x='1800' y='11700' fill='#333' fontSize='250'>
        32
      </text>
	  {diag38}


      <path
        fill="#D0C9A3"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="0.283"
        d="M2025.3 4517.9l-248.2-54.3v-193c5.6-44.5-33.9-202.7 51-202.7 175 5.1 118.8 380.9 197.2 450h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M1935.3 5304.7l-315.9-98.8c-78.9-202.7-56.6-578.9 28.3-851.3 11.1-34.8 56.6-143.3 56.6-197.6-5.6-89.1 73.3-123.9 112.7-5.1 22.7 64.5 33.9 143.3 39.4 207.8 33.9-9.7-22.7-287.2 22.7-326.6 22.7-29.7 107.2-14.8 169.3 227.8 78.9 193 310.3 272.3 276.5 776.6-5.6 118.8-28.3 197.6-56.6 272.3-39.8-10.2-236.9 19.9-333-5.1z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[18].condition)}
        stroke="#020202"
        strokeMiterlimit="10"
		strokeWidth="10"
		onClick={() => this.props.onClick(18)}
        d="M2297.2 5231.4c-33.9-21.3-140.6 5.1-241.7-32-39.4-15.8-107.2-79.8-174.4-79.8-45 0-61.7 53.3-90 64-33.9 21.3-112.3 15.8-174.4 21.3-27.8 32-118.3 138.7-146.1 266.7-16.7 58.5-16.7 111.8-16.7 117.4 0 26.4 0 69.1 16.7 117.4 16.7 47.8 39.4 122.5 112.3 154.5 39.4 15.8 73.3 15.8 90 15.8 45 0 84.4-21.3 118.3-42.7 118.3 90.5 247.3 47.8 309 21.3 67.3 26.4 135 32 196.7 15.8 22.3-5.1 107.2-37.6 151.7-122.5 5.6-5.1 11.1-15.8 11.1-15.8 11.1-15.8 16.7-42.7 16.7-101.6 0-15.8 0-42.7-5.6-74.7-21.5-106.6-66.5-256-173.6-325.1z"
      ></path>
      <path
		fill={conditionToColor(this.props.teeth[18].condition)}
		onClick={() => this.props.onClick(18)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2151.1 5433.7c-275.6 192.1-151.7 330.3-39.4 426.3m-337.3-447.7c320.6 212.9 185.6 346.5 27.8 426.3"
      ></path>
      <path
        fill="#D0C9A3"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M3283.4 4542.5l-97.4 506.6-369.3-49.6-5.1-541.4c71.9-168.9 71.9-298.3 77-456.9 5.1-44.5-30.6-203.7 46.4-203.7 154 5.1 102.5 387.4 174.4 451.8l174 293.2h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M3032 5272.2l-328.4-19.9c-66.8-347.5-138.7-908.8 117.8-1157.4 5.1 0 133.6-154 97.4 74.7 0 25.1-30.6 302.9-30.6 392.5 5.1 228.7 25.5 392.5 97.4 407.3 46.4 9.7 92.3-148.9 82.1-288.1-20.4-581.3-117.8-690.3-92.3-754.8 97.4-49.6 225.9 198.5 251.4 268.1 92.3 243.5 122.9 486.6 143.8 814.6 10.2 109-10.2 198.5-35.7 273.2-25.5-9.7-77 59.8-102.5 49.6l-200.4-59.8z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[17].condition)}
		onClick={() => this.props.onClick(17)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3317.8 5221.6c-5.1-15.8-15.3-47.3-85.8-26.4-120.6 36.6-171.2-121.1-342.4-131.7-302 84-357.2 389.2-377.6 520.5-30.2 205 80.7 278.8 166.1 294.6 171.2 10.7 276.9-58 312.2-131.7 25.1 47.3 90.5 179.1 226.4 179.1 130.8-26.4 312.2-162.8 286.7-252.4-9.4-199.6-140.2-325.8-185.6-452z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[17].condition)}
		onClick={() => this.props.onClick(17)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3066.3 5489.8c-70.5 73.8-100.7 173.5-75.6 257.9m-141-363.2c85.8 36.6 125.7 126.2 135.9 252.4"
      ></path>
      <path
        fill="#D0C9A3"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M4193.1 4924.3l-360-52.4-39.9-341.9c79.8-161.4 79.8-313.6 85.8-465.8 0-42.7 17.2-152.2 91.4-156.8 34.3 0 85.8 23.7 103 71.4 45.5 147.5 137.3 341.9 177.2 375.3l68.7 256.5-126.2 313.7z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M4067.4 5190.6l-399.9 118.8-5.6-228.2c-45.5-152.2-108.6-266.3-131.3-451.4-79.8-261.2 74.2-774.7 199.9-574.8 5.6 4.6 0 19 0 28.3 0 80.7 11.6 142.4 0 218.5-11.6 80.7 5.6 123.4 57.1 228.2 17.2 33.4 28.8 66.3 45.5 123.4 91.4 166.1 177.2 256.5 257 199.5l28.8-204.1c17.2-95.1 17.2-80.7 68.7-166.1 39.9-61.7 62.6-128.5 68.7-199.5l-34.3-218.5c11.6-52.4 22.7-99.7 79.8-109.5 91.4 23.7 148.4 99.7 171.2 147.5 45.5 152.2 68.7 261.2 57.1 418-11.6 99.7-34.3 190.2-68.7 275.6-51.5 128.5-51.5 114.1-45.5 256.5v223.1l-120.1 9.7-228.4-95z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[16].condition)}
		onClick={() => this.props.onClick(16)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4422.8 5285.2c-19.9-43.6-120.1-34.8-140.1-43.6-39.9-13-70-26.4-135-65.4-34.8-21.8-75.2-21.8-115-21.8-30.2 0-54.7 26.4-84.9 34.8l-210.1 65.4c-34.8 17.6-64.9 34.8-84.9 74.2l-39.9 96-14.8 34.8c-25.1 34.8-39.9 91.9-45 135.5-10.2 43.6-10.2 65.4 5.1 109.5 14.8 48.2 34.8 87.2 54.7 126.6 25.1 48.2 79.8 74.2 109.9 78.9 59.8 4.2 99.7-4.2 164.7-26.4l84.9-30.6c45 48.2 54.7 61.2 79.8 78.9 95.1 70 160 21.8 214.8-48.2h144.7c19.9-4.2 50.1-26.4 79.8-61.2 59.8-61.2 59.8-70 64.9-148.4 0-70-10.2-70-50.1-131.3-45-70-50.1-65.4-59.8-148.4l-5.1-61.2-18.6-48.1h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[16].condition)}
		onClick={() => this.props.onClick(16)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4143 5556.1c-54.7 48.2-160 179.1-45 257.9 14.8 13 34.8 17.6 45 21.8l124.8 48.2"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[16].condition)}
		onClick={() => this.props.onClick(16)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3918.1 5451.3c64.9 39.4 90 100.7 120.1 153.1 39.9 70-10.2 187.9-64.9 244.9"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M4987.3 5406.7l-187.9-84.9c-4.6-170.3-52.9-330.3-33.9-530.2 4.6-80.3 52.9-129.9 58-185.1 33.9-240.3 19.5-455.5 28.8-700.5 0-70 120.6-135 187.9 0 159.1 440.2 144.7 935.7 110.9 1406.1l-163.8 94.6z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[15].condition)}
		onClick={() => this.props.onClick(15)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5240.2 5473.1c4.6 0 8.8 4.6 18.1 13.5 53.8 80.7 63.1 152.6 45 233.3 0 13.5-4.6 31.5-8.8 40.4-53.8 76.5-130.4 148.4-270 247.3-26.9 18.1-90 18.1-116.9 4.6-98.8-40.4-175.4-85.4-247.7-152.6-49.6-71.9-40.4-148.4-18.1-233.3 22.7-130.4 98.8-242.6 161.9-359.5 49.6-22.3 98.8-22.3 175.4-22.3 63.1 0 103.4 0 157.7 18.1 44.9 49 53.7 125.1 103.4 210.5zm-4.7 0c-81.2 40.4-135 98.8-171.2 166.1"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M5660.9 5421.1l154-116c58-116 53.8-206 26.9-416.6-15.3-210.6-19.5-416.6-77-682.9-42.2-210.6-154-176.3-169.8-68.7-46.4 330.8-161.9 592.9-96.5 1159.7l162.4 124.5z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[14].condition)}
		onClick={() => this.props.onClick(14)}
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M5962.9 5624.3c22.7 46.4 26.4 97-3.7 143.3-86.7 101.1-166.1 177.2-301.5 231.9-33.9-4.2-71.4-25.1-90.5-67.3-22.7 29.7-37.6 33.9-71.4 38-83-46.4-154.5-143.3-131.7-345.6 26.4-126.6 60.3-236.1 135.9-324.7 64-63.1 241.2-88.6 324.3 20.9 74.6 105.4 101 185.7 138.6 303.5h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6503.4 5388.2l-142.9 47.3-149.8-43.6c-52.4-123.9-52.4-189.3-48.7-342.4 0-113.2 87.2-357.2 73.3-459.3 7-193-20.9-328-13.9-506.6 0-123.9 104.8-105.8 149.8-7.4 149.3 331.8 142.4 958.5 132.2 1312h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[13].condition)}
		onClick={() => this.props.onClick(13)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6505.2 5349.7c18.6 89.1 14.8 129.9 48.2 200.9 174.9 241.7 129.9 341.9-103.9 482.9-33.4 18.6-55.7 44.5-111.3 37.1-59.4-18.6-96.5-74.2-96.5-74.2-7.4-3.7-7.4 26-29.7 26-137.3-33.4-219.4-200.9-171.2-371.6 52-96.5 133.6-289.9 141-304.8 14.8-40.8 89.1-74.2 152.6-74.2 55.7-3.7 96.5 11.1 137.3 33.4 15 7.4 26.1 25.9 33.5 44.5h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[13].condition)}
		onClick={() => this.props.onClick(13)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6251.9 5898.5c38.5-108.1 9.7-197.6-96-284.8"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6991.4 5574.7l217.6-84.9c19.5-3.7 29.2-38.5 33.9-58 43.6-119.7-130.8-444-149.8-687-9.7-92.8-24.1-196.7-67.7-274.2-87.2-212.5-207.8-169.8-217.6-54.3 0 26.9 9.7 61.7 9.7 84.9 33.9 374.4-72.4 779.8-14.4 899.5 14.4 31.1 24.1 65.4 38.5 84.9l149.8 89.1z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[12].condition)}
		onClick={() => this.props.onClick(12)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7464.6 5952.3c10.2 97.4-71 97.4-157.3 93.2-45.5 24.1-81.2 32.5-162.4 36.6-50.6-4.2-157.3-4.2-182.3-44.5-30.6 28.3-106.7 12.1-126.6-4.2-172.6-89.1-136.9-360.9-35.7-551.6 10.2-12.1 45.5-89.1 65.9-93.2 121.5-36.6 207.8-40.4 344.7 0 15.3 4.2 35.7 28.3 40.4 48.7 71.3 210.7 127 279.8 213.3 515z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7820.8 5564.9L7639 5454.1c-24.1-73.8-44.5-648.5 97-993.7 149.8-328.4 242.6-94.2 258.9 4.2 16.2 172.6 16.2 336.8 64.5 517.2 40.4 143.8 60.8 377.6 20.4 574.8l-259 8.3z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[11].condition)}
		onClick={() => this.props.onClick(11)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8087.1 5477.3c3.7 7 0 13.5 0 17.2 39 187 114.1 323.3 114.1 401.3 0 64.5 3.7 231.5-167.5 190.7-14.4-10.2-21.3-13.5-32-7-14.4 20.4-114.1 47.8-245.4-17.2-17.6-20.4-35.7-10.2-46.4-10.2-146.1-58-217.1-98.8-170.7-278.8 71-296 124.8-466.2 327.5-438.8 92.8 13.5 149.4 68.2 202.7 122.5 3.8 3.1 14.5 13.3 17.7 20.3h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[11].condition)}
		onClick={() => this.props.onClick(11)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8025.4 6097.5c-5.6-63.1-5.6-105.8 2.8-156.3m-226.8 118.2c-2.8-25.5-2.8-101.1 0-126.6"
      ></path>
      <path
        fill="#D0C9A3"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="0.283"
        d="M14432.3 4560.1l248.2-54.3v-193c-5.6-44.5 33.9-202.7-51-202.7-174.4 4.7-118.3 380.9-197.2 450h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M14522.8 5346.9l315.9-98.8c78.9-202.7 56.6-578.9-28.3-851.3-11.1-34.8-56.6-143.3-56.6-197.6 5.6-89.1-73.3-123.9-112.7-5.1-22.7 64.5-33.9 143.3-39.4 207.8-33.9-9.7 22.7-287.2-22.7-326.6-22.7-29.7-107.2-14.8-169.3 227.8-78.9 193-310.3 272.3-276.5 776.6 5.6 118.8 28.3 197.6 56.6 272.3 39.3-10.2 237 20 333-5.1z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[28].condition)}
		onClick={() => this.props.onClick(28)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14160.5 5273.6c33.9-21.3 140.6 5.1 241.7-32 39.4-15.8 107.2-79.8 174.4-79.8 45 0 61.7 53.3 90 64 33.9 21.3 112.3 15.8 174.4 21.3 27.8 32 118.3 138.7 146.1 266.7 16.7 58.5 16.7 111.8 16.7 117.4 0 26.4 0 69.1-16.7 117.4-16.7 47.8-39.4 122.5-112.3 154.5-39.4 15.8-73.3 15.8-90 15.8-45 0-84.4-21.3-118.3-42.7-118.3 90.5-247.3 47.8-309 21.3-67.3 26.4-135 32-196.7 15.8-22.3-5.1-107.2-37.6-151.7-122.5-5.6-5.1-11.1-15.8-11.1-15.8-11.1-15.8-16.7-42.7-16.7-101.6 0-15.8 0-42.7 5.6-74.7 21.9-106.6 66.9-256 173.6-325.1z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[28].condition)}
		onClick={() => this.props.onClick(28)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14346.5 5902.2c112.3-96 236.1-234.3-39.4-426.3m348.4 404.9c-157.7-79.8-292.7-213.4 27.8-426.3"
      ></path>
      <path
        fill="#D0C9A3"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M13174.7 4584.3l97.4 506.6 369.3-49.6 5.1-541.4c-71.9-168.9-71.9-298.3-77-456.9-5.1-44.5 30.6-203.7-46.4-203.7-154 5.1-102.5 387.4-174.4 451.8l-174 293.2h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M13426.1 5314.4l328.4-19.9c66.8-347.5 138.7-908.8-117.8-1157.4-5.1 0-133.6-154-97.4 74.7 0 25.1 30.6 302.9 30.6 392.5-5.1 228.7-25.5 392.5-97.4 407.3-46.4 9.7-92.3-148.9-82.1-288.1 20.4-581.3 117.8-690.3 92.3-754.8-97.4-49.6-225.9 198.5-251.4 268.1-92.3 243.5-122.9 486.6-143.8 814.6-10.2 109 10.2 198.5 35.7 273.2 25.5-9.7 77 59.8 102.5 49.6l200.4-59.8z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[27].condition)}
		onClick={() => this.props.onClick(27)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13139.9 5263.9c5.1-15.8 15.3-47.3 85.8-26.4 120.6 36.6 171.2-121.1 342.4-131.7 302 84 357.2 389.2 377.6 520.5 30.2 205-80.7 278.8-166.1 294.6-171.2 10.7-276.9-58-312.2-131.7-25.1 47.3-90.5 179.1-226.4 179.1-130.8-26.4-312.2-162.8-286.7-252.4 9.8-199.7 140.6-325.9 185.6-452z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[27].condition)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13467 5789.5c25.1-84-5.1-184.2-75.6-257.9m80.7 147.5c10.2-126.2 50.1-215.7 135.9-252.4"
      ></path>
      <path
        fill="#D0C9A3"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M12265 4966.5l360-52.4 39.9-341.9c-79.8-161.4-79.8-313.6-85.8-465.8 0-42.7-17.2-152.2-91.4-156.8-34.3 0-85.8 23.7-103 71.4-45.5 147.5-137.3 341.9-177.2 375.3l-68.2 256.5 125.7 313.7z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M12390.7 5232.8l399.9 118.8 5.6-228.2c45.5-152.2 108.6-266.3 131.3-451.4 79.8-261.2-74.2-774.7-199.9-574.8-5.6 4.6 0 19 0 28.3 0 80.7-11.6 142.4 0 218.5 11.6 80.7-5.6 123.4-57.1 228.2-17.2 33.4-28.8 66.3-45.5 123.4-91.4 166.1-177.2 256.5-257 199.5l-28.8-204.1c-17.2-95.1-17.2-80.7-68.7-166.1-39.9-61.7-62.6-128.5-68.7-199.5l34.3-218.5c-11.6-52.4-22.7-99.7-79.8-109.5-91.4 23.7-148.4 99.7-171.2 147.5-45.5 152.2-68.7 261.2-57.1 418 11.6 99.7 34.3 190.2 68.7 275.6 51.5 128.5 51.5 114.1 45.5 256.5v223.1l120.1 9.7 228.4-95z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[26].condition)}
		onClick={() => this.props.onClick(26)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12035.4 5327.4c19.9-43.6 120.1-34.8 140.1-43.6 39.9-13 70-26.4 135-65.4 34.8-21.8 75.2-21.8 115-21.8 30.2 0 54.7 26.4 84.9 34.8l210.1 65.4c34.8 17.6 64.9 34.8 84.9 74.2l39.9 96 14.8 34.8c25 34.8 39.9 91.9 45 135.5 10.2 43.6 10.2 65.4-5.1 109.5-14.8 48.2-34.8 87.2-54.7 126.6-25.1 48.2-79.8 74.2-109.9 78.9-59.8 4.2-99.7-4.2-164.7-26.4l-84.9-30.6c-45 48.2-54.7 61.2-79.8 78.9-95.1 70-160 21.8-214.8-48.2h-144.7c-19.9-4.2-50.1-26.4-79.8-61.2-59.8-61.2-59.8-70-64.9-148.4 0-70 10.2-70 50.1-131.3 45-70 50.1-65.4 59.8-148.4l5.1-61.2 18.6-48.1h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[26].condition)}
		onClick={() => this.props.onClick(26)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12315.1 5598.3c54.7 48.2 160 179.1 45 257.9-14.8 13-34.8 17.6-45 21.8l-124.8 48.2"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[26].condition)}
		onClick={() => this.props.onClick(26)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12540.1 5493.5c-64.9 39.4-90 100.7-120.1 153.1-39.9 70 10.2 187.9 64.9 244.9"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M11470.8 5449l187.9-84.9c4.6-170.3 52.9-330.3 33.9-530.2-4.6-80.3-52.9-129.9-58-185.1-33.9-240.3-19.5-455.5-28.8-700.5 0-70-120.6-135-187.9 0-159.1 440.2-144.7 935.7-110.9 1406.1l163.8 94.6z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[25].condition)}
		onClick={() => this.props.onClick(25)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11321.4 5304.2c53.8-18.1 94.6-18.1 157.7-18.1 76.5 0 126.2 0 175.4 22.3 63.1 116.9 139.6 229.2 161.9 359.5 22.3 85.4 31.5 161.9-18.1 233.3-71.9 67.3-148.4 112.3-247.7 152.6-26.9 13.5-90 13.5-116.9-4.6-139.6-98.8-216.2-170.7-270-247.3-4.6-8.8-8.8-26.9-8.8-40.4-18.1-80.7-8.8-152.6 45-233.3 8.8-8.8 13.5-13.5 18.1-13.5 49.1-84.8 58.4-160.8 103.4-210.5zm71.9 377.6c-36.2-67.3-90-125.7-171.2-166.1"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M10797.2 5463.3l-154-116c-58-116-53.8-206-26.9-416.6 15.3-210.6 19.5-416.6 77-682.9 42.2-210.6 154-176.3 169.8-68.7 46.4 330.8 161.9 592.9 96.5 1159.7l-162.4 124.5z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[24].condition)}
		onClick={() => this.props.onClick(24)}
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M10494.7 5666.5c-22.7 46.4-26.4 97 3.7 143.3 86.7 101.1 166.1 177.2 301.5 231.9 33.9-4.2 71.4-25.1 90.5-67.3 22.7 29.7 37.6 33.9 71.4 38 83-46.4 154.5-143.3 131.7-345.6-26.4-126.6-60.3-236.1-135.9-324.7-64-63.1-241.2-88.6-324.3 20.9-74.1 105.4-100.5 185.7-138.6 303.5h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9954.8 5446.2l142.9 45.9 149.8-42.2c52.4-120.1 52.4-183.2 48.7-331.7 0-109.5-87.2-345.6-73.3-444.4-7-187 20.9-317.3 13.9-490.3 0-120.2-104.8-102.5-149.8-7-149.4 321-142.4 927.8-132.2 1269.7h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[23].condition)}
		onClick={() => this.props.onClick(23)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9952.9 5409.1c-18.6 86.3-14.8 125.7-48.2 194.4-174.9 233.8-129.9 330.8 103.9 467.6 33.4 18.1 55.7 43.1 111.3 36.2 59.4-18.1 96.5-71.9 96.5-71.9 7.4-3.7 7.4 25.1 29.7 25.1 137.3-32.5 219.4-194.4 171.2-360-52-93.7-133.6-280.7-141-295-14.8-39.4-89.1-71.9-152.6-71.9-55.7-3.7-96.5 10.7-137.3 32.5-14.9 6.8-26.1 24.9-33.5 43h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[23].condition)}
		onClick={() => this.props.onClick(23)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10206.2 5974.6c-38.5-90-9.7-164.7 96-237.1"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9466.7 5610.9l-217.6-84.9c-19.5-3.7-29.2-38.5-33.9-58-43.6-119.7 130.8-444 149.8-687 9.7-92.8 24.1-196.7 67.7-274.2 87.2-212.5 207.8-169.8 217.6-54.3 0 26.9-9.7 61.7-9.7 84.9-33.9 374.4 72.4 779.8 14.4 899.5-14.4 31.1-24.1 65.4-38.5 84.9l-149.8 89.1z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[22].condition)}
		onClick={() => this.props.onClick(22)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8993.6 5988.5c-10.2 97.4 71 97.4 157.3 93.2 45.5 24.1 81.2 32.5 162.4 36.6 50.6-4.2 157.3-4.2 182.3-44.5 30.6 28.3 106.7 12.1 126.6-4.2 172.6-89.1 136.9-360.9 35.7-551.6-10.2-12.1-45.5-89.1-65.9-93.2-121.5-36.6-207.8-40.4-344.7 0-15.3 4.2-35.7 28.3-40.4 48.7-71.4 210.7-127 279.8-213.3 515z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8637.3 5601.1l181.8-110.9c24.1-73.8 44.5-648.5-97-993.7-149.8-328.4-242.6-94.2-258.9 4.2-16.2 172.6-16.2 336.8-64.5 517.2-40.4 143.8-60.8 377.6-20.4 574.8l259 8.4z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[21].condition)}
		onClick={() => this.props.onClick(21)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8370.6 5513.4c-3.7 7 0 13.5 0 17.2-39 187-114.1 323.3-114.1 401.3 0 64.5-3.7 231.5 167.5 190.7 14.4-10.2 21.3-13.5 32-7 14.4 20.4 114.1 47.8 245.4-17.2 17.6-20.4 35.7-10.2 46.4-10.2 146.1-58 217.1-98.8 170.7-278.8-71-296-124.8-466.2-327.5-438.8-92.8 13.5-149.4 68.2-202.7 122.5-3.4 3.6-14 13.8-17.7 20.3h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8429.9 5968.1c8.4 50.6 8.4 92.8 2.8 156.3m223.6-164.7c2.8 25.5 2.8 101.1 0 126.6"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2420.6 9977.1c-196.7-28.3-372-56.1-568.3-84.4-90.5 28.3-175.4 62.2-265.8 90-26.4 253.3-10.7 585.9 5.1 636.5 10.7 33.9 37.1 84.4 42.7 129.4 26.4 163.3-10.7 462 15.8 489.9 21.3 39.4 47.8 50.6 79.8 39.4 26.4 0 42.7-33.9 58.5-78.9 0-5.6 5.1-5.6 5.1-5.6-5.1 50.6 10.7 107.2 42.7 118.3 79.8 16.7 164.7-33.9 191.1-56.1 207.4-141 340-304.3 419.8-749.2 10.6-73.3 48.2-422.2-26.5-529.3h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[38].condition)}
		onClick={() => this.props.onClick(38)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2070.8 9490c101.1-77.9 223.6-176.3 329.8-171.2 74.7-10.2 202.3 155.9 218 259.3 21.3 93.2-47.8 254.2-90.5 296-21.3 26-47.8 83-47.8 124.3 0 31.1 5.6 72.8-32 98.8-148.9-41.3-250-26-297.8-10.2-69.1 20.9-164.7 41.3-207.4 41.3-32 0-127.6-20.9-196.7-46.9-47.8-10.2-85.4-15.8-143.8 0-53.3 0-96-150.3-127.6-228.2-21.3-62.2-15.8-161 10.7-218 32-98.8 106.7-202.3 228.7-264.9 58.5-26 127.6-31.1 180.9-5.1 53 31.1 111.5 67.7 175.5 124.8h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3511.2 10081.9c31.1 62.6 36.6 354.4 20.9 439.8-5.1 157.3-281.1 852.2-463.4 780.7-46.9-18.1 67.7-318.7 83.5-372.5 72.8-273.7-5.1-439.8-26-462-57.1 8.8-57.1 188.3-72.8 233.3-5.1 31.5-93.7 152.6-98.8 246.8-10.2 49.2-46.9 282.5-135.5 278.3-57.1-8.8-88.6-129.9-114.6-497.8-15.8-215.2 0-430.5 41.8-641.6l135.5-67.3 629.4 62.3z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[37].condition)}
		onClick={() => this.props.onClick(37)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3457.4 9436.2c32-9.3 68.7-13.9 100.7 0 52.9 42.2 238 196.2 180 317.8-15.8 28.3-127.1 294.6-201.3 331.7-116.4 74.7-270 98.3-317.3 98.3-90-4.6-169.3-74.7-275.1-84-79.3 0-174.9 18.6-201.3-9.3-52.9-84-127.1-285.3-84.9-430 37.1-98.3 201.3-341 391.5-261.6 68.7 37.6 127.1 121.5 201.3 177.7 42.6-52 127.1-103.5 206.4-140.6z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[37].condition)}
		onClick={() => this.props.onClick(37)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3251 9561c-42.2 46.9-74.2 126.2-68.7 196.2m105.8 42.2c-95.1-84-232.9-23.2-259.3-9.3"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M4737.8 10032.7c29.7 63.6 69.6 122.5 84.4 186.5 39.9 152.2 54.7 490.3 34.8 657.3-29.7 299.2-174 568.7-253.3 353-19.9-58.9-25.1-270-25.1-299.2 0-73.8-14.8-166.5-49.6-259.8-54.7-142.4-99.3-269.5-179.1-230.6-25.1 9.7-25.1 206-44.5 441.6-5.1 68.7-25.1 225.5-44.5 279.7-14.8 49.2-59.8 166.5-119.2 137.3-54.7-14.8-79.3-137.3-104.4-534.9 0-78.4-19.9-161.9-29.7-245.4-5.1-63.6-29.7-245.4-5.1-377.6l148.9-127.6 586.4 19.7z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[36].condition)}
		onClick={() => this.props.onClick(36)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4615.3 9433.9c-98.8 4.6-244.5 97-276 119.2-10.2 8.8-98.8-110.4-244.9-92.8-83.5 17.6-114.6 101.6-124.8 128-67.7-31.1-150.8-17.6-187.4 52.9-20.9 52.9-20.9 180.9 20.9 251.4 20.9 44.1 130.4 176.3 197.6 238.4 15.8 17.6 124.8-4.6 187.4 0 197.6 8.8 468.5 48.7 593.3-79.3 15.8-17.6 31.1-57.5 36.6-84 26-141 41.8-251.4 10.2-405.9-14.8-57.4-87.7-145.6-212.9-127.9z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[36].condition)}
		onClick={() => this.props.onClick(36)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4313.3 9808.7c-15.8-84-31.1-220.8 36.6-260.2m-364.6 224.9c-26-61.7-31.1-154.5-15.8-185.1"
      ></path>
      <path
        fill="#F2EBBD"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5321.3 10116.7l-184.6-4.2c-97.4 579.4 66.8 686.6 82.1 854 0 64.5-10.2 116-10.2 167.5 5.1 291.8 122.9 394.8 292.3-141.5 77-240.3 102.5-604.9 25.5-892.5l-205.1 16.7z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[35].condition)}
		onClick={() => this.props.onClick(35)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5701.3 9630.1c10.2 38.5 10.2 72.8 0 107.2-15.3 38.5-75.6 98.8-121.1 184.6-25.1 68.7-40.4 146.1-65.9 197.6-121.1 94.6-272.8 77.5-384.1 13-30.2-47.3-85.8-219-207.4-347.5-50.6-68.7-65.9-150.3-35.3-188.8 40.4-51.5 116.4-64.5 192.1-72.8 35.3-13 75.6-81.6 171.6-111.8 35.3-13 70.5-13 121.1 4.2 45.5 34.3 80.7 64.5 126.2 85.8 51.1 4.2 187.5 8.3 202.8 128.5h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[35].condition)}
		onClick={() => this.props.onClick(35)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5499 9505.8c-65.9 0-80.7 146.1-55.7 214.8m-363.6-197.7c65.9 8.8 96 124.3 90.9 188.8"
      ></path>
      <path
        fill="#F2EBBD"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6110 10164l-178.1 68.7c-25.5 298.8 80.7 710.2 106.2 879.6 89.1 742.2 356.3-318.7 216.2-927.8L6110 10164z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[34].condition)}
		onClick={() => this.props.onClick(34)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6393.4 9761.8c17.2-91.9 34.8-198.5-8.8-261.2-47.8-63.1-165.1-14.4-265.4-82.1-30.6-24.1-82.6-19.5-100.2 4.6-13 14.4-39 38.5-56.6 48.2-69.6 38.5-152.2 111.3-208.8 164.7-30.6 38.5-17.2 149.8 4.2 198.5 113.2 183.7 117.4 270.9 156.3 406.4 4.2 4.6 13 14.4 17.2 14.4 212.9 0 321.9-38.5 330.3-58 40.4-135.8 114.7-334.3 131.8-435.5z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6727 10018.4l-119.7 71.4c-77 151.7-34.8 686.6-23.2 888.8 15.3 320.1 150.3 341 173.5 345.1 165.6 25.1 215.7-1132.8 127.1-1255.3l-157.7-50z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[33].condition)}
		onClick={() => this.props.onClick(33)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7013.2 9532.2c85.8 72.4-85.8 362.8-89.5 449.5-3.7 45-3.7 86.3-22.3 128-78.4 58.9-242.2 41.3-294.1 7-48.2-52-29.7-183.2-48.2-217.6-63.1-117.4-163.8-186.5-74.2-317.8 71-90 201.3-204.1 271.8-204.1 66.8-.9 230.5 117 256.5 155h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7305.9 10007.7l-103 141c-87.7 432.8 15.3 766.8 38 964.4 84 442.1 114.1 254.2 175.4-32.9 76.1-329.4 72.4-729.2 45.9-988.1l-156.3-84.4z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[32].condition)}
		onClick={() => this.props.onClick(32)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7454.8 10112.5c-26.4 57.5-225 68.2-251.4 50.6-3.7-3.7-7.4-10.7-11.1-14.4-63.6-136.8-221.3-594.3-22.7-698.6 67.7-3.7 157.7-14.4 217.6-32.5 37.6-7 75.2-32.5 97.4-18.1 45 14.4 90 100.7 90 154.9-21.9 194.4-104.5 565.1-119.8 558.1z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8180.4 10115.3c-64.9-13.5-130.4-22.3-195.3-31.1-77 31.1-160 58-237.1 84.9 0 116 0 214.3 12.1 326.1 6 66.8 17.6 80.3 23.7 129.4 83 214.3 83 379.5 77 602.6-12.1 147.5 171.6 196.7 219.4-31.1 94.6-420.2 147.9-898 100.2-1080.8h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[31].condition)}
		onClick={() => this.props.onClick(31)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8257.8 9519.7c-5.6 231-22.3 420.3-93.7 605.9-49.6 49.6-248.2 156.8-403.1 53.8-93.7-197.6-138.2-441.2-143.3-668 0-24.6 22.3-45.5 66.3-70 132.7-45.5 364.2-57.5 508-4.2 32.9 8.2 60.3 53.7 65.8 82.5h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14139.6 9977.1c-74.2 107.2-37.1 456.5-26.4 529.3 79.8 444.9 212.5 608.2 419.8 749.2 26.4 22.3 111.8 73.3 191.1 56.1 32-11.1 47.8-67.7 42.7-118.3 0 0 5.1 0 5.1 5.6 15.8 45 32 78.9 58.5 78.9 32 11.1 58.5 0 79.8-39.4 26.4-28.3-10.7-326.6 15.8-489.9 5.1-45 32-95.6 42.7-129.4 15.8-50.6 32-383.2 5.1-636.5-90.5-28.3-175.4-62.2-265.8-90-196.3 27.8-371.7 56.1-568.4 84.4h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[48].condition)}
		onClick={() => this.props.onClick(48)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14489.8 9490c64-57.1 122.5-93.2 175.8-124.3 53.3-26 122.5-20.9 180.9 5.1 122.5 62.2 196.7 166.1 228.7 264.9 26.4 57.1 32 155.9 10.7 218-32 77.9-74.7 228.2-127.6 228.2-58.5-15.8-95.6-10.2-143.8 0-69.1 26-165.1 46.9-196.7 46.9-42.7 0-138.2-20.9-207.4-41.3-47.8-15.8-148.9-31.1-297.8 10.2-37.1-26-32-67.3-32-98.8 0-41.3-26.4-98.8-47.8-124.3-42.7-41.3-111.8-202.3-90.5-296 15.8-103.9 143.8-270 218-259.3 105.9-6.1 228.4 92.7 329.5 170.7h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13679 10019.3l135.5 67.3c41.8 210.6 57.1 426.3 41.8 641.6-26 367.9-57.1 488.9-114.6 497.8-88.6 4.6-124.8-228.7-135.5-278.3-5.1-94.2-93.7-215.2-98.8-246.8-15.8-45-15.8-224.5-72.8-233.3-20.9 22.3-98.8 188.3-26 462 15.8 53.8 130.4 354.4 83.5 372.5-182.3 71.9-458.3-623.5-463.4-780.7-15.8-85.4-10.2-376.7 20.9-439.8l629.4-62.3z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[47].condition)}
		onClick={() => this.props.onClick(47)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13309.2 9576.3c74.2-56.1 132.2-140.1 201.3-177.7 190.7-79.3 354.4 163.8 391.5 261.6 42.2 144.7-32 346.1-84.9 430-26.4 27.8-121.5 9.3-201.3 9.3-105.8 9.3-185.1 79.3-275.1 84-47.8 0-201.3-23.2-317.3-98.3-74.2-37.6-185.1-303.9-201.3-331.7-58.5-121.5 127.1-275.6 180-317.8 32-13.9 68.7-9.3 100.7 0 79.3 37.6 164.2 89.1 206.4 140.6z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[47].condition)}
		onClick={() => this.props.onClick(47)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13378.3 9757.2c5.1-70-26.4-149.4-68.7-196.2m221.8 229.1c-26.4-13.9-164.2-74.7-259.3 9.3"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="22.926"
        strokeWidth="10"
        d="M12409.3 10012.8l148.9 127.6c25 132.7 0 314.1-5.1 377.6-9.7 83.5-29.7 166.5-29.7 245.4-25 397.1-49.6 520-104.4 534.9-59.8 29.2-104.4-88.1-119.2-137.3-19.9-53.8-39.9-211.1-44.5-279.7-19.9-235.7-19.9-431.4-44.5-441.6-79.3-39.4-124.3 88.1-179.1 230.6-34.8 93.2-49.6 186.5-49.6 259.8 0 29.2-5.1 240.3-25 299.2-79.3 215.7-223.6-53.8-253.3-353-19.9-166.5-5.1-505.2 34.8-657.3 14.8-63.6 54.7-122.5 84.4-186.5l586.3-19.7z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[46].condition)}
		onClick={() => this.props.onClick(46)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11731.5 9561.9c-31.1 154.5-15.8 264.9 10.7 405.9 5.1 26.4 20.9 66.3 36.6 84 124.8 128 395.7 88.1 593.3 79.3 62.6-4.6 171.6 17.6 187.4 0 67.7-61.7 177.2-193.9 197.6-238.4 41.8-70.5 41.8-198.5 20.9-251.4-36.6-70.5-119.7-84-187.4-52.9-10.7-26.4-41.8-110.4-124.8-128-145.7-17.6-234.3 101.6-244.9 92.8-31.1-22.3-177.2-114.6-276-119.2-124.8-17.8-197.6 70.4-213.4 127.9z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[46].condition)}
		onClick={() => this.props.onClick(46)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12210.7 9548.4c67.7 39.9 52 176.3 36.6 260.2m343.3-220.3c15.8 31.1 10.2 123.4-15.8 185.1"
      ></path>
      <path
        fill="#F2EBBD"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11034.3 10099.5c-77 287.6-51 652.2 25.5 892.5 169.3 536.3 287.2 433.3 292.3 141.5 0-51.5-10.2-103-10.2-167.5 15.3-167.5 179.5-274.6 82.1-854l-184.6 4.2-205.1-16.7z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[45].condition)}
		onClick={() => this.props.onClick(45)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10859.4 9630.1c15.3-120.1 151.7-124.3 202.3-129 45.5-21.3 80.7-51.5 126.2-85.8 50.6-17.2 85.8-17.2 121.1-4.2 96 30.2 136.4 98.8 171.6 111.8 75.6 8.4 151.7 21.3 192.1 72.8 30.2 38.5 15.3 120.1-35.3 188.8-121.1 129-176.7 300.6-207.4 347.5-111.3 64.5-262.6 81.6-384.1-13-25-51.5-40.4-129-65.9-197.6-45.5-85.8-106.2-146.1-121.1-184.6-9.7-33.9-9.7-68.2.5-106.7h0z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[45].condition)}
		onClick={() => this.props.onClick(45)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11117.3 9720.1c25-68.7 10.2-214.8-55.7-214.8m328.5 206.4c-5.1-64.5 25.1-180.5 90.9-188.8"
      ></path>
      <path
        fill="#F2EBBD"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10305.9 10184.4c-140.1 609.1 127.1 1670 216.2 927.8 25.5-169.3 131.3-580.8 106.2-879.6l-178.1-68.7-144.3 20.5z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[44].condition)}
		onClick={() => this.props.onClick(44)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10297.6 10197c8.8 19.5 117.4 58 330.3 58 4.2 0 13-9.7 17.2-14.4 39-135.5 43.6-222.7 156.3-406.4 21.8-48.2 34.8-159.6 4.2-198.5-56.6-53.3-139.2-125.7-208.8-164.7-17.2-9.7-43.6-33.9-56.6-48.2-17.2-24.1-69.6-29.2-100.2-4.6-100.2 67.7-217.6 19.5-265.4 82.1-43.6 63.1-26 169.3-8.8 261.2 18.6 101.5 92.4 300 131.8 435.5z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9675.5 10068.9c-88.6 122-38.5 1280.4 127.1 1255.3 23.2-4.2 158.2-25 173.5-345.1 11.6-202.3 53.8-737.1-23.2-888.8l-119.7-71.4-157.7 50z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[43].condition)}
		onClick={() => this.props.onClick(43)}
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9547.5 9532.2c26-38 189.7-155.4 257-155.4 71 0 201.3 114.1 271.8 204.1 89.5 131.3-11.1 200.4-74.2 317.8-18.6 34.8 0 166.1-48.2 217.6-52 34.8-216.2 52-294.1-7-18.6-41.3-18.6-83-22.3-128-4.7-86.3-175.9-376.7-90-449.1h0z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9098.4 10092.1c-26.4 258.9-30.6 658.7 45.9 988.1 60.8 287.2 91.4 475 175.4 32.9 22.7-197.6 125.7-531.6 38-964.4l-103-141-156.3 84.4z"
      ></path>
      <path
        fill={conditionToColor(this.props.teeth[42].condition)}
		onClick={() => this.props.onClick(42)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8985.7 9554c0-53.8 45-140.6 90-154.9 22.7-14.4 59.8 10.7 97.4 18.1 59.8 18.1 150.3 28.8 217.6 32.5 199 104.4 41.3 561.8-22.7 698.6-3.7 3.7-7.4 10.7-11.1 14.4-26.4 18.1-225 7.4-251.4-50.6-15 7.4-97.5-363.3-119.8-558.1z"
      ></path>
      <path
        fill="#F2ECBE"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8379.8 10115.3c-47.3 183.2 6 660.6 100.7 1080.4 47.3 227.8 231 178.6 219.4 31.1-6-223.1-6-388.3 77-602.6 6-49.2 17.6-62.6 23.7-129.4 12.1-111.8 12.1-209.7 12.1-326.1-77-26.9-160-53.8-237.1-84.9-65.4 8.8-130.4 18.1-195.8 31.5h0z"
      ></path>
      <path
        fill='#FAFAFA'
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8302.8 9519.7c5.6-28.8 32.9-74.2 66.3-82.6 143.3-53.8 375.3-41.3 508 4.2 44.1 24.6 66.3 45.5 66.3 70-5.6 226.8-49.6 469.9-143.3 668-154.5 103-353-4.2-403.1-53.8-72.4-185.1-89.1-374.8-94.2-605.8h0zM14142.4 6773.9c-19-33.9-94.6-84.4-113.7-127.1-9.3-29.7-9.3-71.9 0-114.1 32.9-160.5 151.7-224.1 227.3-275.1 61.7-33.9 113.7-46.4 175.4-21.3 75.6 29.7 189.3 131.3 237.1 131.3 42.7 0 85.4 4.2 128 8.4s71 12.5 99.3 29.7c38 16.7 71 59.4 99.3 93.2 14.4 12.5 9.3 80.3-9.3 118.3-28.3 63.6-80.7 105.8-90 122.5-4.6 8.4 0 33.9 14.4 50.6 14.4 25.5 9.3 80.3-4.6 105.8-23.7 46.4-180 152.2-284.4 186-57.1 25.5-151.7 33.9-194.4 8.4-61.7-50.6-308-46.4-293.6-232.4-.6-24.9 9.2-62.9 9.2-84.2h0z"
      ></path>
{/* 
<path
        fill={conditionToColor(this.props.teeth[41].condition)}
		onClick={() => this.props.onClick(41)}
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8257.8 9519.7c-5.6 231-22.3 420.3-93.7 605.9-49.6 49.6-248.2 156.8-403.1 53.8-93.7-197.6-138.2-441.2-143.3-668 0-24.6 22.3-45.5 66.3-70 132.7-45.5 364.2-57.5 508-4.2 32.9 8.2 60.3 53.7 65.8 82.5h0z"
	  ></path> */}
	  
<g transform='scale(4.5) translate(322, 65)' fill='none' stroke='#010101' strokeWidth='0'>
<path 
fill={conditionToColor(this.props.teeth[41].condition)}
onClick={() => this.props.onClick(41)}
stroke="#010101" 
strokeWidth="0" strokeMiterlimit="10" d="M1525,2052.1c1.2,49.8,4.8,90.6,20.2,130.6  c10.7,10.7,53.5,33.8,86.9,11.6c20.2-42.6,29.8-95.1,30.9-144c0-5.3-4.8-9.8-14.3-15.1c-28.6-9.8-78.5-12.4-109.5-0.9  C1532.1,2036.1,1526.2,2045.9,1525,2052.1L1525,2052.1z"/>

</g>



      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14241.7 6731.6c-32.9-38-71-71.9-104.4-109.9-38-46.4 14.4-67.7 4.6-127.1 9.3-38 47.3-55.2 104.4-50.6 71-16.7 90 21.3 118.3 25.5 14.4 29.7 4.6 67.7 9.3 101.6 0 71.9 71 55.2 113.7 55.2 104.4-25.5 32.9-88.6 85.4-122.5-4.6-21.3 0-33.9 9.3-42.2 38-8.4 47.3-16.7 85.4-12.5 19 4.2 57.1 12.5 61.7 29.7 0 50.6-4.6 97.4-4.6 148 19 16.7 57.1 25.5 61.7 46.4 4.6 20.9-14.4 55.2-23.7 80.3l-14.4 38c-38-25.5-42.7-88.6-109-71.9-23.7 4.2-38 21.3-61.7 25.5-19 4.2-42.7-8.4-61.7-8.4-28.3 0-61.7 8.4-90 12.5-28.3 8.4-47.3 29.7-61.7 55.2-14.4 29.7-19 59.4-66.3 67.7-23.7 0-42.7-4.2-47.3-38 9.3-25.5 9.3-33.9 28.3-46.4 10-26.4.7-43.5-37.3-56.1h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14142.4 6773.9c47.3 0 99.3-25.5 99.3-38 0-8.4-90-93.2-104.4-109.9-19-25.5-19-55.2-4.6-71.9 14.4-12.5 14.4-42.2 9.3-59.4m104.3-50.7c23.7-4.2 57.1-4.2 71 0 4.6 0 14.4 12.5 28.3 21.3 14.4 8.4 28.3 0 32.9 16.7 4.6 33.9 4.6 76.1 0 114.1m227.8-135.4c-9.3-4.2-32.9 4.2-38 12.5-4.6 4.2 14.4 25.5 0 38-9.3 8.4-19 16.7-19 25.5 0 25.5 0 63.6-9.3 63.6-14.4 0-28.3 33.9-109 21.3m303.3-147.9c-9.3 55.2-14.4 165.1 0 169.3 19 8.4 47.3 4.2 57.1 0 32.9-21.3 52-38 57.1-59.4m-512.2 148c32.9-29.7 66.3-46.4 99.3-50.6 42.7 0 118.3 8.4 142 0 38-16.7 90-21.3 118.3-16.7m199.4 75.7c-19-4.2-52 4.2-61.7 4.2-9.3 0-38-21.3-47.3-21.3-9.3 0-23.7 76.1-28.3 76.1-4.6 0-52-63.6-61.7-71.9-9.3-8.4-42.7-4.2-61.7 0-9.3 0-19 12.5-28.3 16.7-9.3 4.2-28.3 4.2-47.3 0-14.4-4.2-42.7-4.2-61.7 0"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14578 6837.4c-9.3-4.2-23.7-38-28.3-55.2-4.6-12.5 0-29.7 4.6-38m-265.3 51c-14.4 0-23.7 21.3-28.3 46.4 0 8.4 19 33.9 23.7 33.9 14.4 0 38 4.2 42.7 0 19-16.7 38-46.4 42.7-67.7M13120 6679.7c-4.2-12.5-48.2-21.3-61.2-67.7-4.2-33.9-8.8-67.7 0-109.9 21.8-105.8 57.1-194.4 262.6-329.4 34.8-21.3 118.3-12.5 166.1 12.5 253.8 130.8 262.6 130.8 415.7 367.4 21.8 46.4 26.4 295.5 4.2 341.9-39.4 118.3-109.5 219.4-236.1 236.6-13 0-21.8 21.3-34.8 25.5-26.4 12.5-78.9 21.3-96 8.4-13-12.5-48.2-25.5-61.2-25.5-13 4.2-26.4 12.5-39.4 12.5-43.6 16.7-113.7 8.4-144.3-12.5-39.4-25.5-131.3-80.3-205.5-215.2-13-33.9-17.6-92.8-13-139.2 3.4-33.5 21.1-67.4 42.9-105.4h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13592.7 6701c8.8-12.5 0-25.5-4.2-38-4.2-4.2 39.4-38 57.1-33.9 26.4 0 4.2 118.3 26.4 130.8 17.6 12.5 30.6 25.5 30.6 42.2-4.2 25.5-87.7 236.6-231.9 295.5"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13115.8 6675.5c17.6 12.5 83-8.4 91.9 12.5 13 16.7 43.6 105.8 65.4 109.9 26.4-4.2 74.2-88.6 91.9-92.8 26.4-4.2 30.6-16.7 48.2-21.3 43.6-8.4 91.9-8.4 104.8-4.2 17.6 12.5 21.8 33.9 17.6 54.7 4.2 16.7 39.4 0 57.1 12.5 21.8 21.3 43.6 54.7 61.2 63.6 17.6 8.4 65.4-8.4 91.9 16.7 30.6 12.5 87.7-67.7 104.8-67.7 17.6-4.2 48.2 0 65.4-4.2m-857.3-142.8c0-58.9 43.6-118.3 57.1-114.1 8.8 4.2-13 67.7 0 92.8"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13299.5 6882.4c4.2-16.7 4.2-42.2 0-58.9-4.2-12.5-13-16.7-26.4-25.5m-34.9-312.2c17.6 50.6-4.2 92.8 0 122.5 4.2 21.3 65.4 80.3 126.6 97m30.7-211.2c26.4 12.5 52.4 21.3 52.4 38s34.8 80.3 30.6 101.1c-4.2 21.3-30.6 29.7-30.6 50.6m144.8-181.3c-8.8 54.7-61.2 92.8-61.2 118.3 4.2 21.3-13 42.2-8.8 58.9 21.8 16.7 21.8 38 17.6 54.7-13 12.5-21.8 25.5-13 42.2 8.8 16.7 30.6 38 30.6 50.6 0 12.5-13 29.7-21.8 33.9-13 4.2-30.6 16.7-39.4 29.7m310.3-92.8c-4.2-16.7-8.8-42.2-21.8-54.7-8.8-8.4 0-29.7-4.2-46.4-4.2-8.4-21.8-8.4-26.4-21.3 4.2-16.7 17.6-25.5 34.8-33.9M12044.6 6771.5c-4.2-12.1-41.3-52.4-49.6-68.7-12.5-16.2-24.6-257.9 0-282.1 95.1-96.5 193.9-141 222.7-153.1 41.3-16.2 136.4-16.2 193.9-4.2 272.3 52.4 450 161 487.1 314.1 12.5 56.6 8.4 177.2-4.2 270-8.4 76.5-37.1 129-78.4 185.1-28.8 44.1-74.2 88.6-107.2 100.7-28.8 12.1-99.3 12.1-140.1 12.1-20.4-4.2-82.6-64.5-99.3-64.5-12.5-4.2-65.9 19.9-99.3 32-24.6 7.9-70 7.9-95.1 0-41.3-7.9-107.2-40.4-156.8-92.8-53.8-60.3-86.7-145.2-86.7-169.3-3.7-14.8 13-63 13-79.3h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12828.6 6804c-32.9 0-37.1-16.2-65.9-19.9-24.6-4.2-49.6 0-70 4.2-12.5 4.2-24.6 24.1-37.1 24.1-12.5-4.2-12.5-32-37.1-44.1-16.7-7.9-24.6-32-41.3-32-16.7 0-53.8 24.1-70 24.1-16.7-4.2-37.1-28.3-58-32-16.7 0-45.5-12.1-58-12.1-16.7 0-53.8 19.9-78.4 24.1-24.6 0-53.8-4.2-70 4.2-16.7 4.2-28.8 19.9-41.3 19.9-16.7 0-37.1 0-45.5-4.2m548.8-238.3c24.6-16.2 53.8 24.1 58 36.2 12.5 24.1-4.2 44.1-12.5 56.6-32.9 40.4-65.9 120.6-82.6 120.6-12.5 0-70-40.4-95.1-68.7"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12618 6489.9c-28.8-16.2-78.4 4.2-82.6 12.1-4.2 7.9-28.8 32-32.9 52.4-4.2 24.1 8.3 48.2 12.5 56.6 8.4 12.1 49.6 40.4 58 56.6 0 12.1-45.5 40.4-61.7 88.6 0 19.9 28.8 19.9 24.6 36.2-8.4 32-32.9 68.7-49.6 72.4-20.4 7.9-45.5 60.3-82.6 60.3m-107.6-455.6c41.3-28.3 86.7 36.2 103 72.4l24.6 60.3c20.4 48.2 0 80.7 24.6 120.6m-465.8-124.3c32.9 16.2 82.6 48.2 111.3 64.5 16.7 7.9 16.7 68.7 78.4 100.7-12.5 0-28.8 0-37.1 4.2 0 76.5-28.8 52.4-32.9 72.4 0 7.9-4.2 56.6 4.2 60.3 8.4 4.2 16.7 7.9 28.8 4.2m-8-455.2c20.4 0 41.3 0 61.7 19.9 12.5 12.1 16.7 40.4 16.7 56.6 0 19.9 4.2 80.7-8.4 108.6m259.8 450.9c49.6-28.3 123.9-100.7 173.5-177.2 8.4-16.2 16.7-36.2 20.4-52.4 0-16.2 0-32 4.2-44.1M10617.2 6819.8c0-4.2-60.3-67.7-76.1-127.6-7.9-27.8-12.1-67.7 4.2-115.5 56.1-139.6 184.6-187.4 293.2-227.3 32-15.8 68.2-15.8 96.5 4.2 112.3 39.9 229.2 71.9 261.2 195.3 16.2 47.8 16.2 103.4 7.9 147.5-4.2 59.8-28.3 107.6-56.1 151.2-12.1 15.8-7.9 59.8-16.2 87.7-19.9 55.7-72.4 159.6-232.9 207.4-36.2 7.9-92.3 12.1-128.5 0-19.9-7.9-124.3-32-168.9-151.2-7.9-24.1-16.2-119.7-4.2-139.6 3.7-15.9 23.6-15.9 19.9-32.1h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10617.2 6828.1c16.2-15.8 32-35.7 60.3-35.7 19.9 0 52.4 47.8 76.5 47.8 19.9 0 32-35.7 60.3-47.8 0-4.2 80.3 7.9 116.4-12.1 16.2-4.2 36.2 12.1 48.2 7.9 19.9-4.2 36.2-15.8 52.4-12.1 44.1 15.8 76.1 59.8 116.4 71.9"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10633 6605c36.2-4.2 68.2 67.7 80.3 83.5 7.9 15.8 4.2 83.5-19.9 107.6m16.1-231c-4.2-27.8 24.1-43.6 44.1-52 28.3-7.9 52.4-7.9 76.1 0 16.2 12.1 28.3 27.8 32 52 4.2 43.6-12.1 87.7-19.9 87.7-16.2 0-40.4-43.6-52.4-39.9-12.1 4.2-7.9 135.5-4.2 147.5 4.2 12.1 19.9 19.9 24.1 32m177.2-275.1c-7.9 0-28.3 7.9-28.3 15.8-4.2 35.7 4.2 87.7 7.9 95.6 4.2 7.9 28.3 87.7 40.4 87.7s60.3-63.6 80.3-111.3c4.2-12.1 16.2-12.1 24.1-7.9m-208.4 95.5c-4.2 19.9-4.2 52 0 63.6 4.2 4.2 24.1 19.9 40.4 27.8m3.7 131.2c12.1-4.2 28.3-19.9 36.2-39.9 12.1-32 4.2-55.7-4.2-79.8m-232.9 44.1c12.1 7.9 7.9 32 0 52-12.1 7.9-16.2 24.1-16.2 27.8 0 7.9 19.9 15.8 24.1 27.8M9831.8 6651.4c-17.6 25.1-31.5 53.8-7 125.7 66.3 172.6 195.3 312.7 289.5 334.5 31.5 14.4 69.6 14.4 97.9 0 108.1-50.6 181.4-147.5 244.5-255.1 20.9-50.6 20.9-97 3.7-129.4-45.5-97-157.3-190.7-226.8-219.4-45.5-21.8-118.8-14.4-160.5 0-94.7 24.9-206.5 89.9-241.3 143.7h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10027.1 6727c-10.7 14.4-10.7 39.4-10.7 57.5 3.7 18.1 13.9 36.2 24.6 46.9 20.9 21.8 20.9 50.6 20.9 79.3 10.7-3.7 20.9-3.7 31.5-7.4 13.9-7.4 24.6-14.4 38.5-18.1 13.9 0 34.8 3.7 38.5 0 0-3.7 34.8 7.4 34.8 18.1 3.7 10.7 7 46.9 0 64.9-3.7 18.1 10.7 18.1 38.5 3.7 20.9-14.4 31.5-36.2 41.8-61.2 10.7-10.7 13.9-25.1 10.7-39.4 0-14.4 3.7-28.8 3.7-43.1 3.7-21.8 0-43.1-17.6-61.2-13.9-7.4-24.6-14.4-41.8-14.4-10.7 3.7-20.9 10.7-27.8 21.8-24.6 28.8-69.6 90-108.1 64.9 3.7-18.1 7-39.4 7-57.5 0-21.8-10.7-32.5-24.6-43.1-18.1-11.7-39-11.7-59.9-11.7h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9873.6 6694.5c-10.7 25.1 17.6 50.6 20.9 61.2 20.9 82.6 104.8 143.8 115 147.5 13.9 7.4 59.4 10.7 84 0 7-3.7 17.6-14.4 24.6-18.1 13.9-7.4 59.4-7.4 73.3 0 10.7 7.4 20.9 21.8 20.9 32.5-3.7 21.8-10.7 57.5 0 61.2 17.6 3.7 31.5-10.7 45.5-25.1 13.9-14.4 20.9-46.9 31.5-53.8 10.7-14.4 7-28.8 20.9-32.5 17.6-3.7 38.5-10.7 55.7-21.8 17.6-10.7 27.8-7.4 41.8 0"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10212.2 6770.1c3.7-14.4 17.6-21.8 34.8-21.8 13.9 0 34.8 10.7 45.5 28.8 7 14.4 7 32.5 7 50.6-3.7 25.1-7 50.6 0 61.2m-258.4-57.5c20.9 14.4 17.6 50.6 20.9 79.3h17.6c7 32.5-7 100.7 3.7 111.3 0 3.7 7 10.7 13.9 10.7 3.7 3.7 3.7 10.7 0 18.1m-70.1-323.8c52.4-3.7 80.3 18.1 87.2 50.6 0 25.1-13.9 57.5-3.7 71.9 7 10.7 20.9 21.8 24.6 36.2M9126.2 6753.4c33.9-66.3 127.6-176.3 204.1-207.4 25.5-22.3 144.7-26.4 170.3 0 55.2 26.4 170.3 132.2 204.1 202.7 17.2 31.1 21.3 105.8 4.2 149.8-29.7 92.8-110.4 172.1-195.8 233.8-33.9 17.6-84.9 13.5-110.4 0-25.5-8.8-187-136.9-259.3-242.6-8.4-8.8-12.5-17.6-17.2-22.3-21.3-25.8-17.1-92.2 0-114z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9134.6 6881c38 8.8 102.1 8.8 114.6 0 12.5-4.6 21.3-44.1 38-44.1s46.9 61.7 63.6 66.3c8.4 8.8 84.9 8.8 106.2 4.6 33.9-4.6 55.2-48.7 84.9-44.1 25.5 0 17.2 44.1 38 48.7 12.5 4.6 80.7-8.8 123.4 0m-377.1 83.2c0-35.3 8.4-75.2 33.9-92.8"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9500.1 7079.6c-17.2-31.1-55.2-52.9-55.2-70.5-4.2-13.5 12.5-79.3 12.5-101.6m153.6 136.8c-33.9-8.8-33.9-101.6-59.4-110.4-8.4-8.8 4.2-26.4 21.3-35.3M8526.9 6602.7c18.6-10.7 37.1-21.3 58.9-28.8 43.6-10.7 102.1-14.4 151.7-3.7 21.8 3.7 37.1 21.3 52.9 35.7 6 10.7 40.4 10.7 55.7 14.4 46.4 10.7 71.4 50.1 74.2 53.8 12.5 14.4 24.6 28.8 31.1 53.8 12.5 50.1 9.3 107.2-9.3 167.9-43.6 71.4-114.6 221.7-192.1 257.5-15.3 10.7-92.8 3.7-92.8 3.7-71.4-50.1-427.7-282.5-294.6-436.5 12.5-28.8 62.2-96.5 105.3-103.9 12.6-3.3 49.7-7 59-13.9h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8362.7 6878.2c9.3-21.3 18.6-32 37.1-35.7 40.4-3.7 83.5-3.7 99.3 10.7 18.6 21.3 33.9 10.7 46.4-7 18.6-10.7 40.4-10.7 62.2-3.7h58.9c9.3 7 15.3 14.4 24.6 21.3l15.3-18.1c21.8 0 43.6-3.7 62.2-3.7 31.1-14.4 58.9-18.1 83.5-14.4 21.8 3.7 37.1 18.1 43.6 35.7 6 25.1 6 53.8 0 85.8-3.2 21.3-9.3 35.7-21.8 50.1-24.6-3.7-40.4-18.1-52.9-46.4-24.6-21.3-52.9-28.8-90-25.1-15.3 14.4-31.1 21.3-49.6 18.1-33.9-35.7-27.8-53.8-71.4-46.4-12.5 0-24.6 3.7-40.4 3.7-6 3.7-24.6 25.1-46.4 10.7-6-10.7-12.5-14.4-21.8-18.1-15.3-7-40.4 14.4-64.9 43.1-6 7-9.3 7-15.3 14.4-24.8-28.6-40.1-46.7-58.6-75h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8545.4 6845.8c-9.3 7-21.8 21.3-33.9 18.1-9.3 0-15.3-18.1-27.8-21.3-40.4 0-83.5-3.7-96 3.7-9.3 7-21.8 21.3-31.1 35.7m251-40h58.9c6 0 15.3 21.3 24.6 21.3 6 0 15.3-21.3 21.8-21.3h58.9m80.3-13.9c15.3 3.7 33.9 14.4 40.4 28.8 6 14.4 9.3 60.8 0 93.2-3.2 21.3-6 32-21.8 50.1-18.6 10.7-43.6-18.1-52.9-46.4m-250.6-50.5c24.6-7 52.9-7 77.5 0 18.6 14.4 18.6 39.4 33.9 39.4 18.6 0 33.9-10.7 49.6-18.1M8787.1 7121.3c-18.6-18.1-43.6-32-68.2-43.1-9.3-3.7-15.3-43.1-31.1-64.5-6-18.1-12.5-46.4-9.3-68.2M8412.3 6956.6c24.6-14.4 43.6-35.7 64.9-57.1 12.5-7 31.1-10.7 43.6 14.4 3.2 39.4 12.5 71.4 21.8 100.2 9.3 43.1 64.9 100.2 96 125.3M11282 6835.1c0-9.3-8.3-31.5-12.1-49.6-16.2-72.4 0-149.4 0-226.4 16.2-45.5 110.4-167.5 208.3-180.9 85.8-22.7 126.6-4.6 138.7 0 24.6 9.3 65.4 4.6 85.8 13.5 24.6 4.6 61.2 13.5 77.5 27.4 24.6 18.1 106.2 81.6 130.8 185.6 12.1 45.5 12.1 81.6 0 122-12.1 40.8-36.6 77-61.2 90.5 8.4 22.7 4.2 99.7 0 122-12.1 58.9-40.8 113.2-61.2 140.1-45 63.6-122.5 85.8-159.6 95.1-49.2 13.5-118.3 9.3-151.2 4.6-110.4-36.2-204.1-140.1-212.5-190.2-4.2-22.7-8.4-85.8 0-131.3 4.2-4.3 12.5-9 16.7-22.4h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11384 6572.5c24.6-36.2 57.1-31.5 77.5-49.6 32.5-31.5 53.3-22.7 77.5-18.1 36.6 31.5 49.2 103.9 77.5 108.6 45 0 65.4-54.3 97.9-49.6 36.6 13.5 61.2 22.7 85.8 40.8 0 18.1-20.4 27.4-20.4 85.8-4.2 36.2-20.4 40.8-36.6 58.9 4.2 9.3 20.4 22.7 24.6 36.2 4.2 27.4-16.2 72.4-45 54.3-20.4-13.5-36.6-27.4-57.1-40.8-12.1-4.6-24.6-9.3-36.6 13.5-36.6 22.7-69.6 9.3-102.1 0l-49.2-27.4c-8.4 9.3-20.4 22.7-32.5 31.5-12.1-4.6-32.5-9.3-49.2-13.5v-85.8c8.4-13.5 20.4-22.7 28.8-31.5-12.1-9.3-28.8-18.1-40.8-27.4-12.1-35.8-4.2-58.5-.1-85.9h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11282 6835.1c16.2-18.1 40.8-9.3 49.2-13.5 20.4-13.5 36.6-22.7 61.2-22.7 16.2 0 36.6 18.1 53.3 18.1 16.7 0 16.2-31.5 32.5-31.5 20.4 0 32.5 27.4 49.2 27.4 20.4 4.6 73.8 13.5 94.2 9.3 12.1 0 12.1-18.1 24.6-22.7 12.1-4.6 28.8 4.6 40.8-4.6 28.8-18.1 57.1-45.5 77.5-40.8 16.2 0 61.2 63.6 90 67.7"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11641.5 6961.7c12.1-13.5 16.2-36.2 16.2-58.9 0-36.2-20.4-63.6-36.6-81.6m40.8-22.3c28.8 13.5 49.2 31.5 69.6 54.3m-77.9-158.2c20.4 4.6 40.8 9.3 61.2 0 8.4-4.6 0-36.2 8.4-40.8 4.2-4.6 16.2-9.3 16.2-18.1 0-13.5 0-49.6-4.2-54.3-8.4-9.3-32.5-22.7-24.6-22.7 4.2-4.6 85.8 27.4 90 40.8 4.2 18.1-20.4 31.5-20.4 49.6 0 31.5-4.2 63.6-16.2 72.4-20.4 9.3-28.8 27.4-20.4 40.8m-306.2-26.9c32.5 4.6 32.5 54.3 36.6 49.6 4.2-9.3 28.8 4.6 53.3 27.4-12.1 18.1-28.8 31.5-45 45.5-12.1 13.5-24.6 67.7-24.6 90.5m-61.1-145.3c-8.4-22.7-4.2-58.9 0-85.8 4.2-18.1 24.6-13.5 28.8-27.4 4.2-13.5-32.5-22.7-40.8-27.4-12.1-13.5-8.4-58.9 0-90.5m146.5 104.5c-20.4-13.5-53.3-63.6-57.1-85.8 12.1-40.8-16.2-58.9-12.1-67.7 0-9.3 16.2-18.1 24.6-22.7 12.1-4.6 40.8-4.6 53.3 4.6 32.5 27.4 49.2 95.1 61.2 103.9 4.2 0 20.4 4.6 32.5 0M2371.9 6767.8c0 21.3 9.3 59.4 9.3 84.4 14.4 186-231.9 181.8-293.6 232.4-42.7 25.5-137.3 16.7-194.4-8.4-104.4-33.9-260.7-139.6-284.4-186-14.4-25.5-19-80.3-4.6-105.8 14.4-16.7 19-42.2 14.4-50.6-9.3-16.7-61.7-59.4-90-122.5-19-38-23.7-105.8-9.3-118.3 28.3-33.9 61.7-76.1 99.3-93.2 28.3-16.7 57.1-25.5 99.3-29.7 42.7-4.2 85.4-8.4 128-8.4 47.3 0 161-101.6 237.1-131.3 61.7-25.5 113.7-12.5 175.4 21.3 75.6 50.6 194.4 114.1 227.3 275.1 9.3 42.2 9.3 84.4 0 114.1-19.2 42.5-94.8 93.1-113.8 126.9h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2272.6 6725.6c-38 12.5-47.3 29.7-38 55.2 19 12.5 19 21.3 28.3 46.4-4.6 33.9-23.7 38-47.3 38-47.3-8.4-52-38-66.3-67.7-14.4-25.5-32.9-46.4-61.7-55.2-28.3-4.2-61.7-12.5-90-12.5-19 0-42.7 12.5-61.7 8.4-23.7-4.2-38-21.3-61.7-25.5-66.3-16.7-71 46.4-109 71.9l-14.4-38c-9.3-25.5-28.3-59.4-23.7-80.3 4.6-21.3 42.7-29.7 61.7-46.4 0-50.6-4.6-97.4-4.6-148 4.6-16.7 42.7-25.5 61.7-29.7 38-4.2 47.3 4.2 85.4 12.5 9.3 8.4 14.4 21.3 9.3 42.2 52 33.9-19 97.4 85.4 122.5 42.7 0 113.7 16.7 113.7-55.2 4.6-33.9-4.6-71.9 9.3-101.6 28.3-4.2 47.3-42.2 118.3-25.5 57.1-4.2 94.6 12.5 104.4 50.6-9.3 59.4 42.7 80.3 4.6 127.1-32.7 38.9-70.8 72.8-103.7 110.8h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2371.9 6488.6c-4.6 16.7-4.6 46.4 9.3 59.4 14.4 16.7 14.4 46.4-4.6 71.9-14.4 16.7-104.4 101.6-104.4 109.9 0 12.5 52 38 99.3 38m-236.2-177.6c-4.6-38-4.6-80.3 0-114.1 4.6-16.7 19-8.4 32.9-16.7 14.4-8.4 23.7-21.3 28.3-21.3 14.4-4.2 47.3-4.2 71 0m-184.6 177.6c-80.7 12.5-94.6-21.3-109-21.3-9.3 0-9.3-38-9.3-63.6 0-8.4-9.3-16.7-19-25.5-14.4-12.5 4.6-33.9 0-38-4.6-8.4-28.3-16.7-38-12.5m-241.3 122.8c4.6 21.3 23.7 38 57.1 59.4 9.3 4.2 38 8.4 57.1 0 14.4-4.2 9.3-114.1 0-169.3m37.5 190.2c28.3-4.2 80.7 0 118.3 16.7 23.7 8.4 99.3 0 142 0 32.9 4.2 66.3 21.3 99.3 50.6m-161.1 12.9c-19-4.2-47.3-4.2-61.7 0-19 4.2-38 4.2-47.3 0s-19-16.7-28.3-16.7c-19-4.2-52-8.4-61.7 0-9.7 8.4-57.1 71.9-61.7 71.9-4.6 0-19-76.1-28.3-76.1s-38 21.3-47.3 21.3c-9.3 0-42.7-8.4-61.7-4.2"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M1959.9 6738.1c4.6 8.4 9.3 25.5 4.6 38-4.6 16.7-19 50.6-28.3 55.2m208.4-29.6c4.6 21.3 23.7 50.6 42.7 67.7 4.6 4.2 28.3 0 42.7 0 4.6 0 23.7-25.5 23.7-33.9-4.6-25.5-14.4-46.4-28.3-46.4M3394.3 6673.7c21.8 38 39.4 71.9 43.6 105.8 4.2 46.4 0 105.8-13 139.2-74.2 135-166.1 190.2-205.5 215.2-30.6 21.3-100.7 29.7-144.3 12.5-13 0-26.4-8.4-39.4-12.5-13 0-48.2 12.5-61.2 25.5-17.6 12.5-70 4.2-96-8.4-13-4.2-21.8-25.5-34.8-25.5-126.6-16.7-196.7-118.3-236.1-236.6-21.8-46.4-17.6-295.5 4.2-341.9 153.1-236.6 161.9-236.6 415.7-367.4 48.2-25.5 131.3-33.9 166.1-12.5 205.5 135 240.8 223.6 262.6 329.4 8.8 42.2 4.2 76.1 0 109.9-13.6 46.4-57.7 54.7-61.9 67.3h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3044.1 7091.6c-144.3-58.9-227.3-270-231.9-295.5 0-16.7 13-29.7 30.6-42.2 21.8-12.5 0-130.8 26.4-130.8 17.6-4.2 61.2 29.7 57.1 33.9-4.2 12.5-13 25.5-4.2 38"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2597.8 6749.7c17.6 4.2 48.2 0 65.4 4.2 17.6 0 74.2 80.3 104.8 67.7 26.4-25.5 74.2-8.4 91.9-16.7 17.6-8.4 39.4-42.2 61.2-63.6 17.6-12.5 52.4 4.2 57.1-12.5-4.2-21.3 0-42.2 17.6-54.7 13-4.2 61.2-4.2 104.8 4.2 17.6 4.2 21.8 16.7 48.2 21.3 17.6 4.2 65.4 88.6 91.9 92.8 21.8-4.2 52.4-92.8 65.4-109.9 8.8-21.3 74.2 0 91.9-12.5m.5-85c13-25.5-8.8-88.6 0-92.8 13-4.2 57.1 54.7 57.1 114.1"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3241.2 6791.9c-13 8.4-21.8 12.5-26.4 25.5-4.2 16.7-4.2 42.2 0 58.9m-65.4-177.1c61.2-16.7 122.5-76.1 126.6-97 4.2-29.7-17.6-71.9 0-122.5m-209.7 198.1c0-21.3-26.4-29.7-30.6-50.6-4.2-21.3 30.6-84.4 30.6-101.1s26.4-25.5 52.4-38m-100.6 396.6c-8.8-12.5-26.4-25.5-39.4-29.7-8.8-4.2-21.8-21.3-21.8-33.9 0-12.5 21.8-33.9 30.6-50.6 8.8-16.7 0-29.7-13-42.2-4.2-16.7-4.2-38 17.6-54.7 4.2-16.7-13-38-8.8-58.9 0-25.5-52.4-63.6-61.2-118.3m-197.2 139.2c17.6 8.4 30.6 16.7 34.8 33.9-4.2 12.5-21.8 12.5-26.4 21.3-4.2 16.7 4.2 38-4.2 46.4-13 12.5-17.6 38-21.8 54.7M4469.6 6765.5c0 16.2 16.7 64.5 12.5 80.7 0 24.1-32.9 108.6-86.7 169.3-49.6 52.4-115.5 84.4-156.8 92.8-24.6 7.9-70 7.9-95.1 0-32.9-12.1-86.7-36.2-99.3-32-16.7 0-78.4 60.3-99.3 64.5-41.3 0-111.3 0-140.1-12.1-32.9-12.1-78.4-56.6-107.2-100.7-41.3-56.6-70-108.6-78.4-185.1-12.5-92.8-16.7-213.4-4.2-270 37.1-153.1 214.8-261.6 487.1-314.1 58-12.1 152.6-12.1 193.9 4.2 28.8 12.1 128 56.6 222.7 153.1 24.6 24.1 12.5 265.8 0 282.1-7.8 14.9-44.9 55.2-49.1 67.3h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4358.3 6753.4c-8.4 4.2-28.8 4.2-45.5 4.2-12.5 0-24.6-16.2-41.3-19.9-16.7-7.9-45.5-4.2-70-4.2-24.6-4.2-61.7-24.1-78.4-24.1-12.5 0-41.3 12.1-58 12.1-20.4 4.2-41.3 28.3-58 32-16.7 0-53.8-24.1-70-24.1-16.7 0-24.6 24.1-41.3 32-24.6 12.1-24.6 40.4-37.1 44.1-12.5 0-24.6-19.9-37.1-24.1-20.4-4.2-45.5-7.9-70-4.2-28.8 4.2-32.9 19.9-65.9 19.9m256-136c-24.6 28.3-82.6 68.7-95.1 68.7-16.7 0-49.6-80.7-82.6-120.6-8.4-12.1-24.6-32-12.5-56.6 4.2-12.1 32.9-52.4 58-36.2"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4110.6 6918.6c-37.1 0-61.7-52.4-82.6-60.3-16.7-4.2-41.3-40.4-49.6-72.4-4.2-16.2 24.6-16.2 24.6-36.2-16.7-48.2-61.7-76.5-61.7-88.6 8.4-16.2 49.6-44.1 58-56.6 4.2-7.9 16.7-32 12.5-56.6-4.2-19.9-28.8-44.1-32.9-52.4-4.2-7.9-53.8-28.3-82.6-12.1m168.8 233.9c24.6-40.4 4.2-72.4 24.6-120.6l24.6-60.3c16.7-36.2 61.7-100.7 103-72.4m161.4 434.6c12.5 4.2 20.4 0 28.8-4.2 8.4-4.2 4.2-52.4 4.2-60.3-4.2-19.9-32.9 4.2-32.9-72.4-8.4-4.2-24.6-4.2-37.1-4.2 61.7-32 61.7-92.8 78.4-100.7 28.8-16.2 78.4-48.2 111.3-64.5m-214.4 36.4c-12.5-28.3-8.4-88.6-8.4-108.6 0-16.2 4.2-44.1 16.7-56.6 20.4-19.9 41.3-19.9 61.7-19.9m-527.9 362.3c4.2 12.1 4.2 28.3 4.2 44.1 4.2 16.2 12.5 36.2 20.4 52.4 49.6 76.5 123.9 148.9 173.5 177.2M5897 6813.8c-4.2 15.8 16.2 15.8 19.9 32 12.1 19.9 4.2 115.5-4.2 139.6-44.1 119.7-148.4 143.3-168.9 151.2-36.2 12.1-92.3 7.9-128.5 0-160.5-47.8-212.9-151.2-232.9-207.4-7.9-27.8-4.2-71.9-16.2-87.7-28.3-43.6-52.4-91.9-56.1-151.2-7.9-43.6-7.9-99.7 7.9-147.5 32-123.4 148.4-155.4 261.2-195.3 28.3-19.9 64.5-19.9 96.5-4.2 108.6 39.9 237.1 87.7 293.2 227.3 16.2 47.8 12.1 87.7 4.2 115.5-15.7 59.9-76.1 123.9-76.1 127.7h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5366.8 6841.6c40.4-12.1 72.4-55.7 116.4-71.9 16.2-4.2 32 7.9 52.4 12.1 12.1 4.2 32-12.1 48.2-7.9 36.2 19.9 116.4 7.9 116.4 12.1 28.3 12.1 40.4 47.8 60.3 47.8 24.1 0 56.1-47.8 76.5-47.8 28.3 0 44.1 19.9 60.3 35.7"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5821 6790.1c-24.1-24.1-28.3-91.9-19.9-107.6 12.1-15.8 44.1-87.7 80.3-83.5m-176.9 186.9c4.2-12.1 19.9-19.9 24.1-32 4.2-12.1 7.9-143.3-4.2-147.5-12.1-4.2-36.2 39.9-52.4 39.9-7.9 0-24.1-43.6-19.9-87.7 4.2-24.1 16.2-39.9 32-52 24.1-7.9 48.2-7.9 76.5 0 19.9 7.9 48.2 24.1 44.1 52m-401.7 32c7.9-4.2 19.9-4.2 24.1 7.9 19.9 47.8 68.2 111.3 80.3 111.3 12.1 0 36.2-79.8 40.4-87.7 4.2-7.9 12.1-59.8 7.9-95.6 0-7.9-19.9-15.8-28.3-15.8m44.5 267.3c16.2-7.9 36.2-24.1 40.4-27.8 4.2-12.1 4.2-43.6 0-63.6m-76.6 103.5c-7.9 24.1-16.2 47.8-4.2 79.8 7.9 19.9 24.1 35.7 36.2 39.9m193 31.5c4.2-12.1 24.1-19.9 24.1-27.8 0-4.2-4.2-19.9-16.2-27.8-7.9-19.9-12.1-43.6 0-52M6682.4 6645.4c-34.8-53.8-146.6-118.8-240.8-143.8-41.8-14.4-115-21.8-160.5 0-69.6 28.8-181.4 122.5-226.8 219.4-17.6 32.5-17.6 79.3 3.7 129.4 62.6 108.1 135.9 205 244.5 255.1 27.8 14.4 66.3 14.4 97.9 0 94.2-21.8 223.1-161.9 289.5-334.5 24.1-71.4 10.2-100.1-7.5-125.6h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6487.1 6721c-20.9 0-41.8 0-59.4 10.7-13.9 10.7-24.6 21.8-24.6 43.1 0 18.1 3.7 39.4 7 57.5-38.5 25.1-84-36.2-108.1-64.9-7-10.7-17.6-18.1-27.8-21.8-17.6 0-27.8 7.4-41.8 14.4-17.6 18.1-20.9 39.4-17.6 61.2 0 14.4 3.7 28.8 3.7 43.1-3.7 14.4 0 28.8 10.7 39.4 10.7 25.1 20.9 46.9 41.8 61.2 27.8 14.4 41.8 14.4 38.5-3.7-7-18.1-3.7-53.8 0-64.9 0-10.7 34.8-21.8 34.8-18.1 3.7 3.7 24.6 0 38.5 0 13.9 3.7 24.6 10.7 38.5 18.1 10.7 3.7 20.9 3.7 31.5 7.4 0-28.8 0-57.5 20.9-79.3 10.7-10.7 20.9-28.8 24.6-46.9-.5-17.1-.5-42.1-11.2-56.5h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6106.7 6839.7c13.9-7.4 24.6-10.7 41.8 0 17.6 10.7 38.5 18.1 55.7 21.8 13.9 3.7 10.7 18.1 20.9 32.5 10.7 7.4 17.6 39.4 31.5 53.8s27.8 28.8 45.5 25.1c10.7-3.7 3.7-39.4 0-61.2 0-10.7 10.7-25.1 20.9-32.5 13.9-7.4 59.4-7.4 73.3 0 7 3.7 17.6 14.4 24.6 18.1 24.6 10.7 69.6 7.4 84 0 10.7-3.7 94.2-64.9 115-147.5 3.7-10.7 31.5-36.2 20.9-61.2"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6214.8 6882.9c7-10.7 3.7-36.2 0-61.2 0-18.1 0-36.2 7-50.6 10.7-18.1 31.5-28.8 45.5-28.8 17.6 0 31.5 7.4 34.8 21.8m115.4 280.7c-3.7-7.4-3.7-14.4 0-18.1 7 0 13.9-7.4 13.9-10.7 10.7-10.7-3.7-79.3 3.7-111.3h17.6c3.7-28.8 0-64.9 20.9-79.3m-94.6 53.8c3.7-14.4 17.6-25.1 24.6-36.2 10.7-14.4-3.7-46.9-3.7-71.9 7-32.5 34.8-53.8 87.2-50.6M7388 6862c-4.2 4.6-8.4 13.5-17.2 22.3-72.4 105.8-233.8 233.8-259.3 242.6-25.5 13.5-76.5 17.6-110.4 0-84.9-61.7-165.6-141-195.8-233.8-17.2-44.1-12.5-119.2 4.2-149.8 33.9-70.5 148.9-176.3 204.1-202.7 25.5-26.4 144.7-22.3 170.3 0 76.5 31.1 170.3 141 204.1 207.4 17.2 21.2 21.4 87.6 0 114z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6810 6906.1c42.7-8.8 110.4 4.6 123.4 0 21.3-4.6 12.5-48.7 38-48.7 29.7-4.6 51 39.9 84.9 44.1 21.3 4.6 97.9 4.6 106.2-4.6 17.2-4.6 46.9-66.3 63.6-66.3s25.5 39.9 38 44.1c12.5 8.8 76.5 8.8 114.6 0m-224.5 22.6c25.5 17.6 33.9 57.5 33.9 92.8"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7056.3 6901.4c0 22.3 17.2 88.1 12.5 101.6 0 17.6-38 39.9-55.2 70.5m-71.9-180.9c17.2 8.8 29.7 26.4 21.3 35.3-25.5 8.8-25.5 101.6-59.4 110.4M7987.4 6596.6c9.3 7 46.4 10.7 58.9 14.4 43.6 7 92.8 75.2 105.3 103.9 133.1 154-223.1 386.4-294.6 436.5 0 0-77.5 7-92.8-3.7-77.5-35.7-148.9-186-192.1-257.5-18.6-60.8-21.8-118.3-9.3-167.9 6-25.1 18.6-39.4 31.1-53.8 3.2-3.7 27.8-43.1 74.2-53.8 15.3-3.7 49.6-3.7 55.7-14.4 15.3-14.4 31.1-32 52.9-35.7 49.6-10.7 108.6-7 151.7 3.7 21.9 7 40.4 17.7 59 28.3h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8151.6 6872.2c-18.6 28.8-33.9 46.4-58.9 75.2-6-7-9.3-7-15.3-14.4-24.6-28.8-49.6-50.1-64.9-43.1-9.3 3.7-15.3 7-21.8 18.1-21.8 14.4-40.4-7-46.4-10.7-15.3 0-27.8-3.7-40.4-3.7-43.6-7-37.1 10.7-71.4 46.4-18.6 3.7-33.9-3.7-49.6-18.1-37.1-3.7-64.9 3.7-90 25.1-12.5 28.8-27.8 43.1-52.9 46.4-12.5-14.4-18.6-28.8-21.8-50.1-6-32-6-60.8 0-85.8 6-18.1 21.8-32 43.6-35.7 24.6-3.7 52.9 0 83.5 14.4 18.6 0 40.4 3.7 62.2 3.7l15.3 18.1c9.3-7 15.3-14.4 24.6-21.3h58.9c21.8-7 43.6-7 62.2 3.7 12.5 18.1 27.8 28.8 46.4 7 15.3-14.4 58.9-14.4 99.3-10.7 18.8 3 28.1 13.7 37.4 35.5h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8157.6 6875.4c-9.3-14.4-21.8-28.8-31.1-35.7-12.5-7-55.7-3.7-96-3.7-12.5 3.7-18.6 21.3-27.8 21.3-12.5 3.7-24.6-10.7-33.9-18.1m-226.4-2.7h58.9c6 0 15.3 21.3 21.8 21.3 9.3 0 18.6-21.3 24.6-21.3h58.9M7696 6947.4c-9.3 28.8-33.9 57.1-52.9 46.4-15.3-18.1-18.6-28.8-21.8-50.1-9.3-32-6-78.9 0-93.2 6-14.4 24.6-25.1 40.4-28.8m124.3 96.9c15.3 7 31.1 18.1 49.6 18.1 15.3 0 15.3-25.1 33.9-39.4 24.6-7 52.9-7 77.5 0M7835.7 6939.9c3.2 21.3-3.2 50.1-9.3 68.2-15.3 21.3-21.8 60.8-31.1 64.5-24.6 10.7-49.6 25.1-68.2 43.1M7876 7133.4c31.1-25.1 86.7-82.1 96-125.3 9.3-28.8 18.6-60.8 21.8-100.2 12.5-25.1 31.1-21.3 43.6-14.4 21.8 21.3 40.4 43.1 64.9 57.1M5232.3 6829.1c4.2 13.5 12.1 18.1 16.2 22.7 8.4 45.5 4.2 108.6 0 131.3-8.4 49.6-102.1 154-212.5 190.2-32.5 4.6-102.1 9.3-151.2-4.6-36.6-9.3-114.6-31.5-159.6-95.1-20.4-27.4-49.2-81.6-61.2-140.1-4.2-22.7-8.4-99.7 0-122-24.6-13.5-49.2-49.6-61.2-90.5-12.1-40.8-12.1-77 0-122 24.6-103.9 106.2-167.5 130.8-185.6 16.2-13.5 53.3-22.7 77.5-27.4 20.4-9.3 61.2-4.6 85.8-13.5 12.1-4.6 53.3-22.7 138.7 0 97.9 13.5 192.1 135.9 208.3 180.9 0 77 16.2 154 0 226.4-3.3 17.7-11.6 40.4-11.6 49.3h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5130.2 6566.5c4.2 27.4 12.1 49.6 0 85.8-12.1 9.3-28.8 18.1-40.8 27.4 8.4 9.3 20.4 18.1 28.8 31.5v85.8c-16.2 4.6-36.6 9.3-49.2 13.5-12.1-9.3-24.6-22.7-32.5-31.5l-49.2 27.4c-32.5 9.3-65.4 22.7-102.1 0-12.1-22.7-24.6-18.1-36.6-13.5-20.4 13.5-36.6 27.4-57.1 40.8-28.8 18.1-49.2-27.4-45-54.3 4.2-13.5 20.4-27.4 24.6-36.2-16.2-18.1-32.5-22.7-36.6-58.9 0-58.9-20.4-67.7-20.4-85.8 24.6-18.1 49.2-27.4 85.8-40.8 32.5-4.6 53.3 49.6 97.9 49.6 28.8-4.6 40.8-77 77.5-108.6 24.6-4.6 45-13.5 77.5 18.1 20.4 18.1 52.8 13.5 77.4 49.7h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4660.3 6815.6c28.8-4.6 73.8-67.7 90-67.7 20.4-4.6 49.2 22.7 77.5 40.8 12.1 9.3 28.8 0 40.8 4.6 12.1 4.6 12.1 22.7 24.6 22.7 20.4 4.6 73.8-4.6 94.2-9.3 16.2 0 28.8-27.4 49.2-27.4 16.2 0 16.2 31.5 32.5 31.5s36.6-18.1 53.3-18.1c24.6 0 40.8 9.3 61.2 22.7 8.4 4.6 32.5-4.6 49.2 13.5"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4893.2 6815.6c-16.2 18.1-36.6 45.5-36.6 81.6 0 22.7 4.2 45.5 16.2 58.9m-90-108.9c20.4-22.7 40.8-40.8 69.6-54.3m-81.7-36.2c8.4-13.5 0-31.5-20.4-40.8-12.1-9.3-16.2-40.8-16.2-72.4 0-18.1-24.6-31.5-20.4-49.6 4.2-13.5 85.8-45.5 90-40.8 8.4 0-16.2 13.5-24.6 22.7-4.2 4.6-4.2 40.8-4.2 54.3 0 9.3 12.1 13.5 16.2 18.1 8.4 4.6 0 36.2 8.4 40.8 20.4 9.3 40.8 4.6 61.2 0m195.8 253.3c0-22.7-12.1-77-24.6-90.5-16.2-13.5-32.5-27.4-45-45.5 24.6-22.7 49.2-36.2 53.3-27.4 4.2 4.6 4.2-45.5 36.6-49.6m53.4-162.8c8.4 31.5 12.1 77 0 90.5-8.4 4.6-45 13.5-40.8 27.4 4.2 13.5 24.6 9.3 28.8 27.4 4.2 27.4 8.4 63.6 0 85.8m-237.1-194.5c12.1 4.6 28.8 0 32.5 0 12.1-9.3 28.8-77 61.2-103.9 12.1-9.3 40.8-9.3 53.3-4.6 8.4 4.6 24.6 13.5 24.6 22.7 4.2 9.3-24.6 27.4-12.1 67.7-4.2 22.7-36.6 72.4-57.1 85.8M13881.2 8542.2c13.5-24.6 26.9-39.4 31.5-64 4.6-34.3 4.6-98.3-4.6-132.7-8.8-39.4-40.4-83.5-81.2-108.1-54.3-29.7-99.3-29.7-139.6-5.1-13.5 5.1-18.1 24.6-26.9 29.7-22.7 0-26.9-34.3-54.3-39.4-45-9.7-54.3-39.4-85.8-34.3-26.9 0-54.3 24.6-63.1 34.3-13.5 14.8-13.5 34.3-26.9 39.4-13.5 0-22.7-19.5-31.5-29.7-8.8-14.8-45-39.4-76.5-39.4-26.9-5.1-40.4 14.8-63.1 14.8-18.1 0-112.7 0-130.8 14.8-31.5 19.5-67.7 49.2-85.8 122.9-4.6 54.3-31.5 58.9-26.9 117.8 0 54.3 22.7 49.2 22.7 64s-58.5 39.4-76.5 108.1c-13.5 54.3-8.8 128 0 162.4 8.8 34.3 31.5 83.5 54.3 117.8 36.2 54.3 81.2 98.3 117.4 122.9 31.5 14.8 76.5 19.5 108.1 29.7 22.7 5.1 121.5 58.9 171.2 73.8 67.7 14.8 144.3 14.8 212 0 45-9.7 90 0 135.5-14.8 63.1-19.5 167-231 185.1-275.1 18.1-54.3 13.5-132.7-4.6-162.4-14.7-24.4-14.7-103.3-59.7-147.4h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13155.2 8394.7c8.8 44.1 18.1 78.9 40.4 103.5 26.9 44.1 67.7 54.3 103.9 64 36.2 5.1 58.5-9.7 90-29.7 31.5-5.1 58.5-9.7 90-14.8 63.1-9.7 108.1-9.7 144.3 0 45 9.7 85.8 29.7 130.8 58.9 40.4 34.3 72.4 73.8 103.9 108.1 8.8 24.6 4.6 49.2-22.7 68.7-18.1 14.8-49.6 14.8-67.7 9.7-26.9 9.7-67.7 5.1-94.6-5.1-13.5 24.6-26.9 39.4-67.7 49.2-26.9 5.1-49.6 0-63.1-9.7-36.2-34.3-40.4-39.4-63.1-24.6-18.1 9.7-31.5 19.5-49.6 29.7-36.2 5.1-67.7 0-94.6-9.7l-108.1-14.8c-8.8-5.1-18.1 0-26.9-5.1-45-9.7-90-29.7-103.9-54.3-22.7-24.6-36.2-54.3-31.5-88.6 13.5-54.3 45-83.5 72.4-103.4-13.7-48.5-9.1-92.6 17.8-132h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13854.3 8689.8c-36.2-54.3-94.6-108.1-130.8-128-22.7-9.7-45-24.6-72.4-29.7-94.6-29.7-130.8-19.5-193.9-5.1-13.5 5.1-49.6 0-67.7 9.7-31.5 9.7-36.2 29.7-63.1 29.7-22.7 0-40.4 0-58.5-14.8-45-14.8-72.4-44.1-94.6-88.6-8.8-19.5-8.8-64-18.1-68.7-18.1 5.1-36.2 58.9-22.7 142.4 0 14.8-40.4 24.6-67.7 78.9-4.6 19.5-8.8 34.3-8.8 49.2s18.1 44.1 31.5 64"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13881.2 8542.2c-36.2-9.7-76.5-9.7-94.6-5.1-22.7 5.1-40.4 24.6-63.1 29.7m-81.2 58.9c13.5 14.8 26.9 34.3 31.5 58.9 4.6 24.6 0 54.3-4.6 78.9-8.8 14.8-22.7 34.3-36.2 39.4-8.8 5.1-49.6 19.5-58.5 14.8-8.8-5.1-45-19.5-58.5-39.4m247.8-10.1c-36.2 5.1-67.7 5.1-94.6-5.1m-135-122.5c-22.7 29.7-54.3 58.9-58.5 68.7-4.6 19.5 8.8 64 4.6 73.8-8.8 9.7-49.6 34.3-72.4 39.4-22.7 0-126.2-29.7-144.3-29.7-22.7-5.1-58.5 5.1-67.7-9.7-4.6-9.7 4.6-34.3 4.6-58.9 0-19.5-8.8-58.9 4.6-64 26.9-9.7 13.5-88.6 63.1-108.1"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M13376 8620.6c0 24.6-26.9 49.2-36.2 64-22.7 34.3 4.6 93.2-18.1 122.9M14046.4 8619.2c0-23.2-13.9-55.7-18.6-88.6-9.3-55.7-9.3-135 4.6-162.8 27.8-60.3 88.1-139.6 162.4-162.8 74.2-23.2 185.6-23.2 199.5-18.6 13.9 4.6 37.1 46.4 46.4 51 18.6 0 37.1-32.5 55.7-37.1 55.7-23.2 176.3-18.6 204.1-9.3 106.7 51 208.8 153.6 241.2 213.9 13.9 51 9.3 158.2-9.3 172.1 27.8 27.8 88.1 130.4 97.4 167.5 4.6 32.5 4.6 93.2-4.6 121.1-78.9 176.7-162.4 213.9-260.2 260.2-60.3 13.9-162.4 9.3-199.5-4.6-74.2-18.6-264.9-32.5-376.2-93.2-92.8-64.9-162.4-199.9-185.6-344.2-3.7-22.8 33.4-41.4 42.7-64.6h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14241.7 8623.9c-23.2-37.1-4.6-111.8 32.5-116.4 32.5-9.3 69.6-4.6 88.1 0 18.6-18.6 41.8-32.5 88.1-32.5 32.5 13.9 60.3 32.5 92.8 46.4 37.1 4.6 69.6-4.6 106.7 9.3 32.5 13.9 46.4 46.4 74.2 55.7 27.8 9.3 51 18.6 78.9 27.8 13.9 23.2 51 37.1 69.6 78.9 4.6 13.9 13.9 27.8 18.6 46.4-23.2 18.6-60.3 51-78.9 69.6-18.6 27.8-41.8 46.4-69.6 51-41.8 0-88.1 4.6-129.9 4.6-32.5-4.6-60.3-9.3-64.9-23.2-13.9-18.6-13.9-74.2-46.4-97.9-23.2-9.3-18.6-13.9-41.8-23.2-18.6-13.9-37.1-18.6-60.3-18.6-32.5-13.9-55.7 18.6-78.9 55.7-27.8 41.8-51 60.3-64.9 60.3-27.8 4.6-41.8-4.6-51-74.2-9.3-13.9-13.9-27.8-23.2-41.8 4.6-27.8 13.9-46.4 27.8-64.9 4.6-13 23.2-3.7 32.5-13h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14794.2 8814.5c13.9-23.2 78.9-60.3 83.5-74.2 0-9.3-32.5-74.2-51-83.5-13.9-9.3-32.5-23.2-37.1-41.8m-255.7 227.4c0 9.3 18.6 18.6 37.1 23.2 55.7 0 111.3 0 162.4-4.6"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14933.3 8577c-46.4-18.6-78.9 37.1-129.9 41.8-32.5-9.3-74.2-27.8-116-41.8-18.6-9.3-46.4-4.6-64.9 9.3s-60.3 9.3-92.8 13.9c23.2 51 4.6 144.3-13.9 153.5-9.3 4.6-74.2-37.1-92.8-46.4-13.9-4.6-51-4.6-64.9 0-13.9 4.6-83.5 102.5-97.4 111.8-9.3 4.6-23.2 4.6-37.1 0m-177.2-199.9c37.1-32.5 88.1-64.9 106.7-64.9 23.2 0 32.5 41.8 51 46.4 13.9 0 37.1 13.9 37.1 18.6s-32.5 9.3-41.8 13.9c-9.3 9.3-27.8 46.4-27.8 64.9 0 13.9 18.6 27.8 23.2 41.8m553-316c-23.2 37.1-78.9 64.9-97.4 74.2-18.6 9.3-83.5 23.2-106.7 23.2-27.8-4.6-51-27.8-83.5-46.4-18.6 0-32.5-4.6-46.4 0-9.3 4.6-51 27.8-51 32.5 0 13.9 83.5 18.6 167 88.1"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14306.6 8377.1c27.8 37.1 69.6 83.5 111.3 93.2 18.6 0 46.4-4.6 60.3-4.6 60.3-13.9 106.7-41.8 153.1-74.2"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M14441.1 8237.5c-4.6 18.6-9.3 41.8 0 64.9 9.3 18.6 27.8 27.8 37.1 55.7 4.6 27.8 9.3 60.3 0 74.2-9.3 13.9-27.8 32.5-51 41.8m288.1-166.6l78.9-64.9M12811.5 8554.8c-9.7-25.1 14.8-139.6 0-174.9-63.6-95.1-196.2-184.6-314.1-180-24.6 0-73.8 39.9-93.2 39.9-19.5 0-58.9-30.2-78.4-39.9-44.1-14.8-156.8-14.8-186.5-5.1-49.2 19.9-156.8 95.1-206 184.6-19.5 25.1-34.3 115-34.3 160 0 25.1-39.4 90-39.4 115-9.7 30.2-14.8 99.7-5.1 135 14.8 34.8 83.5 79.8 122.5 109.9 19.5 14.8 53.8 70 73.8 99.7 103 109.9 191.1 79.8 215.7 90 44.1 19.9 103 45 196.2 39.9 88.1 5.1 112.7-25.1 132.7-25.1 58.9-25.1 127.6-25.1 152.2-34.8 83.5-30.2 112.7-119.7 122.5-135 34.3-50.1 34.3-209.7 24.6-249.6-4.8-29.9-73.5-99.5-83.2-129.6h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12060.9 8579.8c-19.5 30.2-24.6 64.9-34.3 95.1 9.7 10.2 19.5 19.9 34.3 30.2 0 14.8-5.1 30.2-5.1 45 0 5.1 0 14.8 5.1 19.9h53.8v25.1h73.8c24.6-5.1 49.2-5.1 73.8-10.2 5.1-5.1 19.5-5.1 34.3-5.1 19.5 0 39.4 0 53.8 5.1 34.3 14.8 68.7 34.8 103 50.1 9.7 0 19.5 5.1 29.2 5.1 9.7-5.1 19.5-10.2 24.6-14.8 19.5-5.1 39.4-5.1 63.6-10.2 44.1-50.1 29.2-90 5.1-149.8-9.7-14.8-24.6-30.2-49.2-34.8 0-30.2 0-59.8-14.8-84.9-14.8-14.8-39.4-14.8-73.8-14.8 0-10.2 0-25 5.1-34.8-9.7 5.1-24.6 5.1-34.3 10.2l-88.1-14.8c-29.2 14.8-53.8 25.1-83.5 39.9-19.5 0-39.4-5.1-58.9-5.1-19.6 3.5-68.8-1.6-117.5 53.6h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12026.5 8674.4c0 19.9 29.2 19.9 34.3 30.2 0 25.1-9.7 59.8 0 64.9 14.8 5.1 44.1-5.1 53.8 0 5.1 10.2-9.7 19.9 0 25.1 19.5 5.1 108.1 0 142.4-10.2m-358-279.7c14.8 14.8 24.6 45 39.4 50.1 24.6 0 14.8-64.9 19.5-70 9.7-5.1 29.2 5.1 39.4 0 9.7-5.1 0-19.9 5.1-25.1 9.7-5.1 88.1-5.1 103-5.1 9.7 0 19.5 19.9 14.8 34.8m58 165.1c-14.8-45-19.5-115-5.1-124.8 19.5-14.8 53.8 5.1 68.7 0 19.5-10.2 44.1-30.2 78.4-39.9 39.4-5.1 58.9 34.8 122.5 5.1 0 19.9-9.7 34.8-9.7 50.1-5.1 19.9-9.7 39.9-19.5 54.7-19.5 14.8-39.4 45-49.2 70-9.7 30.2-44.1 64.9-83.5 79.8"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M12266.8 8334.9c-5.1 25.1-5.1 59.8 0 64.9 9.7 5.1 14.8 5.1 19.5 10.2 14.8 10.2-5.1 45 9.7 54.7l24.6 25.1m211.1-135c-5.1 14.8-19.5 30.2-29.2 34.8-9.7 0-9.7 34.8-19.5 54.7-5.1 10.2-19.5 14.8-24.6 19.9-9.7 10.2-14.8 25-14.8 34.8m-5.1 30.7c19.5-5.1 39.4-5.1 58.9 5.1 19.5 5.1 29.2 34.8 24.6 45 0 14.8-5.1 39.9 0 50.1s24.6 10.2 34.3 14.8c9.7 5.1 14.8 25.1 19.5 39.9m117.8-229.6c-24.6 14.8-29.2 45-58.9 45-19.5 0-44.1 19.9-39.4 30.2 5.1 14.8 19.5 0 39.4 14.8 14.8 14.8 24.6 30.2 34.3 39.9 19.5 14.8 19.5 54.7 39.4 64.9 14.8 10.2 0 34.8 9.7 50.1 9.7 10.2 19.5 10.2 24.6 19.9 5.1 10.2 0 75.2-5.1 90-5.1 10.2-29.2 14.8-24.6 25.1m-299.1-235.1c14.8 19.9 9.7 75.2 39.4 90 24.6 19.9 14.8 39.9 68.7 95.1 14.8 5.1 49.2 19.9 49.2 34.8 0 10.2-29.2 0-49.2 5.1-19.5 5.1-24.6 19.9-39.4 19.9-9.7 0-39.4-10.2-53.8-19.9-24.6-14.8-49.2-34.8-73.8-39.9M11057.5 8516.7c-4.6-34.8 0-70 4.6-100.7 9.3-30.6 42.7-83 85.4-96 66.3-17.6 128-8.8 161.4 0 23.7 8.8 52 39.4 71 39.4s42.7-21.8 71-34.8c19-8.8 90-8.8 109 0 57.1 17.6 128 83 161.4 126.6 14.4 17.6 38 70 47.3 109.5 14.4 56.6 9.3 214.3-14.4 266.7-38 78.9-194.4 144.3-246.8 166.1-57.1 26.4-170.7 21.8-208.8 13-85.4-17.6-213.4-104.8-246.8-153.1-28.3-39.4-4.6-83-14.4-100.7-9.3-13-23.7-30.6-33.4-43.6-19-52.4-14.4-104.8 0-126.6 20.5-26.3 48.8-44 53.5-65.8z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11247.2 8481.9c33.4 13 61.7 8.8 80.7-8.8 4.6-21.8 4.6-43.6 9.3-65.4 0-4.2 4.6-8.8 9.3-13 4.6 8.8 9.3 13 9.3 21.8 4.6 17.6 9.3 34.8 14.4 48.2 0 13 9.3 17.6 19 13 23.7 8.8 38 0 47.3-13 9.3-8.8 9.3-4.2 19-13 57.1-4.2-19 43.6 9.3 56.6 19 4.2 38 8.8 61.7 13 23.7 4.2 42.7 8.8 66.3 4.2 23.7-13 52-17.6 71-17.6 0 13 0 26.4-4.6 34.8-4.6 34.8-23.7 43.6-47.3 52.4 19 17.6 33.4 34.8 38 56.6 4.6 26.4 4.6 48.2 0 74.2-9.3 26.4-23.7 43.6-42.7 48.2-28.3 8.8-52 26.4-99.7 30.6-47.3 0-85.4-39.4-109-21.8-23.7 34.8-47.3 52.4-66.3 43.6-19-4.2-28.3-13-28.3-30.6s-9.3-26.4-42.7-30.6c-14.4-4.2-23.7-8.8-38-8.8-4.6-13-14.4-30.6-19-43.6 0-26.4 23.7-39.4 47.3-43.6 0-30.6-71-48.2-61.7-83-28.3-30.6-38-70-4.6-131.3 9.3-4.2 19-13 28.3-17.6 19.8 13.9 29.1 26.9 33.7 44.5h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11247.2 8481.9c0-17.6-23.7-39.4-38-43.6-9.3-4.2-33.4 30.6-52 39.4-33.4 21.8-66.3 17.6-94.6 39.4m-24.2 235.7c33.4-21.8 71-61.2 104.4-96 19-13 33.4-65.4 42.7-70 14.4-8.8 52 17.6 76.1 26.4 19 4.2 47.3 0 71-13 23.7-8.8 57.1-26.4 71-26.4 14.4 0 33.4 34.8 52 43.6 14.4 4.2 76.1-8.8 109-8.8 28.3 0 66.3-17.6 76.1-26.4 14.4-13 19-56.6 19-70-4.6-8.8-61.7 17.6-90 17.6-28.3 0-76.1-13-113.7-21.8m137.7 275.5c38 0 52-48.2 57.1-70 4.6-21.8 4.6-43.6-4.6-65.4-9.3-21.8-14.4-30.6-33.4-48.2"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M11522.3 8722.2c4.6-8.8 0-26.4-4.6-39.4-4.6-17.6-52-61.2-61.7-61.2-4.6 0-33.4 39.4-38 70m-170.8-17.6c-14.4 0-47.3 21.8-47.3 34.8 0 13 19 52.4 28.3 56.6 9.3 4.2 61.7 4.2 66.3 13 9.3 8.8 14.4 34.8 19 43.6 4.6 4.2 28.3 13 38 8.8 9.7-4.2 33.4-43.6 52-48.2m-75.6-309.5c0-26.4 9.3-74.2 19-78.9 9.3 4.2 23.7 83 28.3 83 9.3 4.2 38 4.2 42.7 0 9.3 0 23.7-21.8 38-26.4M10289.7 8590.5c34.8-64.5 77.5-146.6 108.6-176.7 26.9-26 97-73.3 151.2-99.3 62.2-30.2 104.8-34.3 159.1-4.2 34.8 17.2 81.2 47.3 104.8 82.1 23.2 26 93.2 163.8 100.7 202.7 11.6 77.5-11.6 125.3-19.5 159.6-39 133.6-166.5 232.9-217.1 258.9-34.8 17.2-100.7 21.3-131.7 4.2-120.1-69.1-205.5-142.4-267.7-306.2-15.3-43.6-3.7-91 11.6-121.1h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10402 8646.6c3.7-26 11.6-43.1 23.2-52 26.9-8.8 46.4-8.8 73.8-34.3 19.5-34.3-7.9-77.5 19.5-73.3 26.9 26 39 56.1 50.6 90.5-3.7 69.1-19.5 103.5-39 133.6-23.2 17.2-42.7 17.2-69.6 8.8-15.3-4.2-31.1-8.8-50.6-13-15.4 0-15.4-21.3-7.9-60.3zM10609.3 8659.6c3.7-26 7.9-52 7.9-77.5-7.9-82.1 3.7-95.1 15.3-107.6 11.6-8.8 19.5-21.3 31.1-30.2 34.8-17.2 23.2 69.1 39 86.3 50.6 30.2 69.6 77.5 77.5 133.6-3.7 47.3-26.9 56.1-62.2 43.1-26.9 4.2-58 13-93.2 26-3.8-22.2-11.7-47.7-15.4-73.7h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M10518.4 8487c19.5 17.2 39 47.3 50.6 90.5 3.7 34.3-11.6 112.3-39 133.6m-104.8-116.4c-7.9 8.8-19.5 30.2-23.2 52 0 13-7.9 39-3.7 52 3.7 8.8 39 21.3 62.2 21.3m240.2-276.1c-23.2 17.2-42.7 43.1-50.6 69.1-3.7 21.3 11.6 77.5 0 103.5-11.6 21.3 0 112.3 11.6 116.4s54.3-34.3 93.2-26m-15.7-176.7c58 34.3 69.6 82.1 77.5 138.2M9611.5 8573.8c16.2-25.5 153.6-178.6 225.9-238.4 40.4-25.5 97-17.2 129.4 0 64.5 38.5 109 68.2 153.5 127.6 28.3 33.9 60.8 97.9 72.8 148.9 24.1 59.4 16.2 123.4 4.2 178.6-20.4 59.4-88.6 199.9-133.1 217.1-36.2 13-169.8 8.4-201.8 0-16.2-4.2-104.8-80.7-137.3-110.4-44.5-51-80.7-115-116.9-178.6-16.7-33.9-20.8-98 3.3-144.8h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9724.7 8608.1c4.2-25.5 16.2-33.9 28.3-42.7 28.3-8.3 28.3-21.3 56.6-42.7 16.2-97.9 7.9-89.5 84.9-144.7 28.3 25.5 7.9 144.7 7.9 182.8 7.9 119.2-24.1 148.9-56.6 144.7-24.1 17.2-76.5-13-104.8-25.5-12.1-20.9-28.4-33.8-16.3-71.9h0zM9978.9 8522.8c-16.2 17.2 7.9 46.9 12.1 55.2 7.9 17.2 16.2 46.9 4.2 64-7.9 8.4-28.3 0-28.3 17.2 0 21.3 4.2 33.9 7.9 42.7 28.3 13 64.5 21.3 92.8-4.2 16.2-17.2 12.1-33.9 20.4-46.9 12.1-25.5 36.2-13 44.5-42.7-4.2-29.7-16.2-46.9-36.2-76.5-4.2-4.2-7.9-17.2-20.4-25.5-7.9-17.2-76.6-17.2-97 16.7h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9805.4 8522.8c12.1-21.3 4.2-68.2 20.4-84.9 12.1-17.2 52.4-59.4 64.5-59.4 20.4 4.2 4.2 174.4 7.9 264m109-140.6c24.1-4.2 60.8-4.2 68.7 0 7.9 4.2 36.2 46.9 40.4 55.2 4.2 13 20.4 42.7 16.2 51-4.2 8.4-16.2 13-24.1 17.2-7.9 4.2-16.2 13-20.4 21.3m-92.9-72.8c4.2 21.3 4.2 55.2 0 68.2-7.9 8.4-20.4 0-24.1 8.4-4.2 4.2 0 38.5 4.2 46.9 4.2 8.4 20.4 8.4 32.5 8.4m-283-93.4c0 13-4.2 38.5 4.2 51 12.1 21.3 44.5 33.9 52.4 38.5 12.1 4.2 40.4 4.2 60.8 4.2M9136.9 8336.3c-26.9 14.4-71.9 72.4-81.2 106.2-9.3 33.9-18.1 58-31.5 82.1-13.5 19.5-71.9 67.3-85.4 91.4-13.5 24.1-40.4 125.3-13.5 207.4 13.5 48.2 90 129.9 130.4 149.4 40.4 19.5 184.2 24.1 260.7 9.7 53.8-24.1 148.4-82.1 206.9-207.4 18.1-48.2 26.9-106.2-4.6-149.4-81.2-110.9-175.4-212-265.4-298.8-26.4-14.8-75.6-19.4-116.4 9.4z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9150.4 8413.3c13.5-24.1 36.2-33.9 49.6-33.9 31.5 0 45 28.8 45 72.4 0 9.7 0 24.1 4.6 33.9 26.9 4.6 36.2 19.5 22.3 52.9 26.9 9.7 53.8 14.4 81.2 9.7 18.1 0 36.2 28.8 53.8 52.9 26.9 33.9 22.3 72.4 18.1 110.9-8.8 14.4-8.8 28.8-49.6 28.8-22.3-14.4-26.9-28.8-31.5-33.9-26.9 0-53.8-4.6-81.2-4.6-18.1-4.6-31.5-9.7-45-14.4-22.3-4.6-45-9.7-63.1-9.7-45 9.7-116.9 86.7-139.6 9.7v-28.8c0-38.5 18.1-52.9 40.4-67.3 0-19.5 4.6-33.9 4.6-52.9 18.1-14.4 31.5-24.1 49.6-38.5 0-14.4 0-24.1 4.6-38.5 13.9-14.9 22.7-34.3 36.2-48.7h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M9155 8418.4c-18.1 9.7-31.5 24.1-45 48.2-4.6 9.7 4.6 24.1 0 38.5-4.6 9.7-40.4 24.1-49.6 33.9-4.6 9.7 0 33.9-4.6 52.9-4.6 14.4-31.5 19.5-36.2 33.9-4.6 14.4-4.6 43.1-4.6 62.6m185-303.9c22.3-9.7 31.5 0 45 33.9 8.8 19.5-4.6 52.9 4.6 67.3 8.8 9.7 22.3 4.6 26.9 14.4 4.6 9.7-8.8 33.9 0 38.5 13.5 19.5 94.6 0 98.8 24.1 4.6 24.1 40.4 43.1 49.6 62.6s4.6 58 4.6 91.4m-292.6-38.1c26.9-4.6 76.5 0 94.6 14.4 22.3 19.5 81.2 4.6 112.3 14.4"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8286.6 8567.8c38.5-104.8 120.6-244 159.6-274.2 53.3-39.9 106.2-34.8 145.2-19.9 62.6 29.7 207.8 189.3 261.2 298.8 14.4 34.8 14.4 129.4 9.7 209.2-14.4 54.7-43.6 99.7-77.5 124.8-38.5 19.9-87.2 25.1-149.8 45-53.3 19.9-174 19.9-222.2-5.1-77.5-39.9-111.3-139.6-125.7-194.4-5.6-54.4-14.9-124.4-.5-184.2z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8523.2 8343.7c33.9 0 58 19.9 62.6 45 9.7 19.9 19.5 49.6 29.2 69.6l72.4 59.8c33.9 25.1 62.6 49.6 77.5 89.5 9.7 25.1-4.6 34.8-29.2 34.8h-33.9c-24.1-9.7-53.3-5.1-96.5 0-43.6 5.1-87.2 0-130.4-5.1h-62.6c-24.1-5.1-48.2 0-53.3-29.7 0-34.8 9.7-64.9 29.2-99.7 19.5-29.7 38.5-64.9 58-94.6 19-29.7 43.1-59.9 77-69.6h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8518.5 8348.8c-19.5 0-43.6 14.8-58 39.9-24.1 39.9-62.6 104.8-72.4 124.8-14.4 19.9-29.2 64.9-24.1 99.7m212.5-219.9c19.5 14.8 29.2 54.7 38.5 64.9 19.5 25.1 101.6 69.6 135.5 124.8 9.7 9.7 19.5 34.8 9.7 49.6-14.4 9.7-38.5 9.7-58 5.1m-289.9-10.1c67.7 5.1 130.4 19.9 193.4 9.7"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2621.5 8527.4c-45 44.1-45 122.9-58.5 147.5-18.1 29.7-22.7 108.1-4.6 162.4 18.1 44.1 121.5 255.6 185.1 275.1 45 14.8 90 5.1 135.5 14.8 67.7 14.8 144.3 14.8 212 0 49.6-14.8 148.9-68.7 171.2-73.8 31.5-9.7 76.5-14.8 108.1-29.7 36.2-24.6 81.2-68.7 117.4-122.9 22.7-34.3 45-83.5 54.3-117.8 8.8-34.3 13.5-108.1 0-162.4-18.1-68.7-76.5-93.2-76.5-108.1s22.7-9.7 22.7-64c4.6-58.9-22.7-64-26.9-117.8-18.1-73.8-54.3-103.5-85.8-122.9-18.1-14.8-112.7-14.8-130.8-14.8-22.7 0-36.2-19.5-63.1-14.8-31.5 0-67.7 24.6-76.5 39.4-8.8 9.7-18.1 29.7-31.5 29.7-13.5-5.1-13.5-24.6-26.9-39.4-8.8-9.7-36.2-34.3-63.1-34.3-31.5-5.1-40.4 24.6-85.8 34.3-26.9 5.1-31.5 39.4-54.3 39.4-8.8-5.1-13.5-24.6-26.9-29.7-40.4-24.6-85.8-24.6-139.6 5.1-40.4 24.6-72.4 68.7-81.2 108.1-8.8 34.3-8.8 98.3-4.6 132.7 2.9 24.5 16.8 39.3 30.3 63.9h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3347.5 8379.9c26.9 39.4 31.5 83.5 18.1 132.7 26.9 19.5 58.5 49.2 72.4 103.4 4.6 34.3-8.8 64-31.5 88.6-13.5 24.6-58.5 44.1-103.9 54.3-8.8 5.1-18.1 0-26.9 5.1l-108.1 14.8c-26.9 9.7-58.5 14.8-94.6 9.7-18.1-9.7-31.5-19.5-49.6-29.7-22.7-14.8-26.9-9.7-63.1 24.6-13.5 9.7-36.2 14.8-63.1 9.7-40.4-9.7-54.3-24.6-67.7-49.2-26.9 9.7-67.7 14.8-94.6 5.1-18.1 5.1-49.6 5.1-67.7-9.7-26.9-19.5-31.5-44.1-22.7-68.7 31.5-34.3 63.1-73.8 103.9-108.1 45-29.7 85.8-49.2 130.8-58.9 36.2-9.7 81.2-9.7 144.3 0 31.5 5.1 58.5 9.7 90 14.8 31.5 19.5 54.3 34.3 90 29.7 36.2-9.7 76.5-19.5 103.9-64 22-25.4 30.8-59.7 40.1-104.2h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3414.7 8714.3c13.5-19.5 31.5-49.2 31.5-64s-4.6-29.7-8.8-49.2c-26.9-54.3-67.7-64-67.7-78.9 13.5-83.5-4.6-137.8-22.7-142.4-8.8 5.1-8.8 49.2-18.1 68.7-22.7 44.1-49.6 73.8-94.6 88.6-18.1 14.8-36.2 14.8-58.5 14.8-26.9 0-31.5-19.5-63.1-29.7-18.1-9.7-54.3-5.1-67.7-9.7-63.1-14.8-99.3-24.6-193.9 5.1-26.9 5.1-49.6 19.5-72.4 29.7-36.2 19.5-94.6 73.8-130.8 128"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2779.2 8552c-22.7-5.1-40.4-24.6-63.1-29.7-18.1-5.1-58.5-5.1-94.6 5.1m365 236.1c-13.5 19.5-49.6 34.3-58.5 39.4-8.8 5.1-49.6-9.7-58.5-14.8-13.5-5.1-26.9-24.6-36.2-39.4-4.6-24.6-8.8-54.3-4.6-78.9 4.6-24.6 18.1-44.1 31.5-58.9m-26.7 137.8c-26.9 9.7-58.5 9.7-94.6 5.1m495.8-216.7c49.6 19.5 36.2 98.3 63.1 108.1 13.5 5.1 4.6 44.1 4.6 64 0 24.6 8.8 49.2 4.6 58.9-8.8 14.8-45 5.1-67.7 9.7-18.1 0-121.5 29.7-144.3 29.7-22.7-5.1-63.1-29.7-72.4-39.4-4.6-9.7 8.8-54.3 4.6-73.8-4.6-9.7-36.2-39.4-58.5-68.7"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M3180.9 8792.7c-22.7-29.7 4.6-88.6-18.1-122.9-8.8-14.8-36.2-39.4-36.2-64M2455.8 8604.4c9.3 23.2 46.4 41.8 41.8 64.9-23.2 144.3-92.8 279.3-185.6 344.2-111.3 60.3-302 74.2-376.2 93.2-37.1 13.9-139.2 18.6-199.5 4.6-97.4-46.4-180.9-83.5-260.2-260.2-9.3-27.8-9.3-88.1-4.6-121.1 9.3-37.1 69.6-139.6 97.4-167.5-18.6-13.9-23.2-121.1-9.3-172.1 32.5-60.3 134.5-162.8 241.2-213.9 27.8-9.3 148.4-13.9 204.1 9.3 18.6 4.6 37.1 37.1 55.7 37.1 9.3-4.6 32.5-46.4 46.4-51s125.3-4.6 199.5 18.6c74.2 23.2 134.5 102.5 162.4 162.8 13.9 27.8 13.9 107.2 4.6 162.8-3.7 32.6-17.7 65.1-17.7 88.3h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2261 8609c9.3 9.3 27.8 0 32.5 13.9 13.9 18.6 23.2 37.1 27.8 64.9-9.3 13.9-13.9 27.8-23.2 41.8-9.3 69.6-23.2 78.9-51 74.2-13.9 0-37.1-18.6-64.9-60.3-23.2-37.1-46.4-69.6-78.9-55.7-23.2 0-41.8 4.6-60.3 18.6-23.2 9.3-18.6 13.9-41.8 23.2-32.5 23.2-32.5 78.9-46.4 97.9-4.6 13.9-32.5 18.6-64.9 23.2-41.8 0-88.1-4.6-129.9-4.6-27.8-4.6-51-23.2-69.6-51-18.6-18.6-55.7-51-78.9-69.6 4.6-18.6 13.9-32.5 18.6-46.4 18.6-41.8 55.7-55.7 69.6-78.9 27.8-9.3 51-18.6 78.9-27.8 27.8-9.3 41.8-41.8 74.2-55.7 37.1-13.9 69.6-4.6 106.7-9.3 32.5-13.9 60.3-32.5 92.8-46.4 46.4 0 69.6 13.9 88.1 32.5 18.6-4.6 55.7-9.3 88.1 0 37.1 3.7 55.7 78.4 32.5 115.5h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M1713.1 8558c-4.6 18.6-23.2 32.5-37.1 41.8-18.6 9.3-51 74.2-51 83.5 4.6 13.9 69.6 51 83.5 74.2m60.3 46.8c51 4.6 106.7 4.6 162.4 4.6 18.6-4.6 37.1-13.9 37.1-23.2"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2279.6 8804.3c-13.9 4.6-27.8 4.6-37.1 0-13.9-9.3-83.5-107.2-97.4-111.8-13.9-4.6-51-4.6-64.9 0-18.6 9.3-83.5 51-92.8 46.4-18.6-9.3-37.1-102.5-13.9-153.6-32.5-4.6-74.2 0-92.8-13.9s-46.4-18.6-64.9-9.3c-41.8 13.9-83.5 32.5-116 41.8-51-4.6-83.5-60.3-129.9-41.8m737.5 163.4c4.6-13.9 23.2-27.8 23.2-41.8 0-18.6-18.6-55.7-27.8-64.9-9.3-4.6-41.8-9.3-41.8-13.9s23.2-18.6 37.1-18.6c18.6-4.6 27.8-46.4 51-46.4 18.6 0 69.6 32.5 106.7 64.9m-482.9-23.6c83.5-69.6 167-74.2 167-88.6 0-4.6-41.8-27.8-51-32.5-13.9-4.6-27.8 0-46.4 0-32.5 18.6-55.7 41.8-83.5 46.4-23.2 0-88.1-13.9-106.7-23.2-18.6-9.3-74.2-37.1-97.4-74.2"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M1870.9 8376.6c46.4 32.5 92.8 60.3 153.1 74.2 13.9 0 41.8 4.6 60.3 4.6 41.8-9.3 83.5-55.7 111.3-93.2"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M2075.4 8460.1c-23.2-9.3-41.8-27.8-51-41.8s-4.6-46.4 0-74.2c9.3-27.8 27.8-37.1 37.1-55.7 9.3-23.2 4.6-46.4 0-64.9m-353 4.2l78.9 64.9M3691.2 8539.9c-9.7 30.2-78.4 99.7-83.5 129.9-9.7 39.9-9.7 199.9 24.6 249.6 9.7 14.8 39.4 104.8 122.5 135 24.6 10.2 93.2 10.2 152.2 34.8 19.5 0 44.1 30.2 132.7 25.1 93.2 5.1 152.2-19.9 196.2-39.9 24.6-10.2 112.7 19.9 215.7-90 19.5-30.2 53.8-84.9 73.8-99.7 39.4-30.2 108.1-75.2 122.5-109.9 9.7-34.8 5.1-104.8-5.1-135 0-25.1-39.4-90-39.4-115 0-45-14.8-135-34.3-160-49.2-90-156.8-164.7-206-184.6-29.2-10.2-142.4-10.2-186.5 5.1-19.5 10.2-58.9 39.9-78.4 39.9-19.5 0-68.7-39.9-93.2-39.9-117.8-5.1-250 84.9-314.1 180-14.5 35 10 150 .3 174.6h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4441.8 8565c-49.2-54.7-97.9-50.1-117.8-54.7-19.5 0-39.4 5.1-58.9 5.1-29.2-14.8-53.8-25.1-83.5-39.9l-88.1 14.8c-9.7-5.1-24.6-5.1-34.3-10.2 5.1 10.2 5.1 25.1 5.1 34.8-34.3 0-58.9 0-73.8 14.8-14.8 25.1-14.8 54.7-14.8 84.9-24.6 5.1-39.4 19.9-49.2 34.8-24.6 59.8-39.4 99.7 5.1 149.8 24.6 5.1 44.1 5.1 63.6 10.2 5.1 5.1 14.8 10.2 24.6 14.8 9.7 0 19.5-5.1 29.2-5.1 34.3-14.8 68.7-34.8 103-50.1 14.8-5.1 34.3-5.1 53.8-5.1 14.8 0 29.2 0 34.3 5.1 24.6 5.1 49.2 5.1 73.8 10.2h73.8v-25.1h53.8c5.1-5.1 5.1-14.8 5.1-19.9 0-14.8-5.1-30.2-5.1-45 14.8-10.2 24.6-19.9 34.3-30.2-9.4-29.1-14.5-63.9-34-94h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4245.6 8770c34.3 10.2 122.5 14.8 142.4 10.2 9.7-5.1-5.1-14.8 0-25.1 9.7-5.1 39.4 5.1 53.8 0 9.7-5.1 0-39.9 0-64.9 5.1-10.2 34.3-10.2 34.3-30.2m-93.2-185c-5.1-14.8 5.1-34.8 14.8-34.8 14.8 0 93.2 0 103 5.1 5.1 5.1-5.1 19.9 5.1 25.1 9.7 5.1 29.2-5.1 39.4 0 5.1 5.1-5.1 70 19.5 70 14.8-5.1 24.6-34.8 39.4-50.1M4221 8734.8c-39.4-14.8-73.8-50.1-83.5-79.8-9.7-25.1-29.2-54.7-49.2-70-9.7-14.8-14.8-34.8-19.5-54.7 0-14.8-9.7-30.2-9.7-50.1 63.6 30.2 83.5-10.2 122.5-5.1 34.3 10.2 58.9 30.2 78.4 39.9 14.8 5.1 49.2-14.8 68.7 0 14.8 10.2 9.7 79.8-5.1 124.8"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M4182 8475l24.6-25.1c14.8-10.2-5.1-45 9.7-54.7 5.1-5.1 9.7-5.1 19.5-10.2 5.1-5.1 5.1-39.9 0-64.9m-176.7 165.1c0-10.2-5.1-25-14.8-34.8-5.1-5.1-19.5-10.2-24.6-19.9-9.7-19.9-9.7-54.7-19.5-54.7-9.7-5.1-24.6-19.9-29.2-34.8m-44.1 328.8c5.1-14.8 9.7-34.8 19.5-39.9 9.7-5.1 29.2-5.1 34.3-14.8 5.1-10.2 0-34.8 0-50.1-5.1-10.2 5.1-39.9 24.6-45 19.5-10.2 39.4-10.2 58.9-5.1m-274.6 304.7c5.1-10.2-19.5-14.8-24.6-25.1-5.1-14.8-9.7-79.8-5.1-90 5.1-10.2 14.8-10.2 24.6-19.9 9.7-14.8-5.1-39.9 9.7-50.1 19.5-10.2 19.5-50.1 39.4-64.9 9.7-10.2 19.5-25.1 34.3-39.9 19.5-14.8 34.3 0 39.4-14.8 5.1-10.2-19.5-30.2-39.4-30.2-29.2 0-34.3-30.2-58.9-45m338.7 330.3c-24.6 5.1-49.2 25.1-73.8 39.9-14.8 10.2-44.1 19.9-53.8 19.9-14.8 0-19.5-14.8-39.4-19.9-19.5-5.1-49.2 5.1-49.2-5.1 0-14.8 34.3-30.2 49.2-34.8 53.8-54.7 44.1-75.2 68.7-95.1 29.2-14.8 24.6-70 39.4-90M5497.2 8567.8c14.4 21.8 19 74.2 0 126.6-9.3 13-23.7 30.6-33.4 43.6-9.3 17.6 14.4 61.2-14.4 100.7-33.4 48.2-161.4 135.5-246.8 153.1-38 8.8-151.7 13-208.8-13-52-21.8-208.8-87.2-246.8-166.1-23.7-52.4-28.3-209.7-14.4-266.7 9.3-39.4 33.4-91.9 47.3-109.5 33.4-43.6 104.4-109.5 161.4-126.6 19-8.8 90-8.8 109 0 28.3 13 52 34.8 71 34.8s47.3-30.6 71-39.4c33.4-8.8 94.6-17.6 161.4 0 42.7 13 76.1 65.4 85.4 96 4.6 30.6 9.3 65.4 4.6 100.7 6.1 22.1 34.4 39.3 53.5 65.8z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5255.5 8467.1c4.6-17.6 14.4-30.6 33.4-43.6 9.3 4.2 19 13 28.3 17.6 33.4 61.2 23.7 100.7-4.6 131.3 9.3 34.8-61.7 52.4-61.7 83 23.7 4.2 47.3 17.6 47.3 43.6-4.6 13-14.4 30.6-19 43.6-14.4 0-23.7 4.2-38 8.8-33.4 4.2-42.7 13-42.7 30.6s-9.3 26.4-28.3 30.6c-19 8.8-42.7-8.8-66.3-43.6-23.7-17.6-61.7 21.8-109 21.8-47.3-4.2-71-21.8-99.7-30.6-19-4.2-33.4-21.8-42.7-48.2-4.6-26.4-4.6-48.2 0-74.2 4.6-21.8 19-39.4 38-56.6-23.7-8.8-42.7-17.6-47.3-52.4-4.6-8.8-4.6-21.8-4.6-34.8 19 0 47.3 4.2 71 17.6 23.7 4.2 42.7 0 66.3-4.2 23.7-4.2 42.7-8.8 61.7-13 28.3-13-47.3-61.2 9.3-56.6 9.3 8.8 9.3 4.2 19 13 9.3 13 23.7 21.8 47.3 13 9.3 4.2 19 0 19-13 4.6-13 9.3-30.6 14.4-48.2 0-8.8 4.6-13 9.3-21.8 4.6 4.2 9.3 8.8 9.3 13 4.6 21.8 4.6 43.6 9.3 65.4 19.3 16.7 47.6 20.9 81 7.9h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5440.1 8501.9c-28.3-21.8-61.7-17.6-94.6-39.4-19-8.8-42.7-43.6-52-39.4-14.4 4.2-38 26.4-38 43.6m-208.8 26.8c-38 8.8-85.4 21.8-113.7 21.8s-85.4-26.4-90-17.6c0 13 4.6 56.6 19 70 9.3 8.8 47.3 26.4 76.1 26.4 33.4 0 94.6 13 109 8.8 19-8.8 38-43.6 52-43.6 14.4 0 47.3 17.6 71 26.4 23.7 13 52 17.6 71 13 23.7-8.8 61.7-34.8 76.1-26.4 9.3 4.2 23.7 56.6 42.7 70 33.4 34.8 71 74.2 104.4 96m-574.4-153.4c-19 17.6-23.7 26.4-33.4 48.2-9.3 21.8-9.3 43.6-4.6 65.4 4.6 21.8 19 70 57.1 70"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5084.3 8676.8c-4.6-30.6-33.4-70-38-70-9.3 0-57.1 43.6-61.7 61.2-4.6 13-9.3 30.6-4.6 39.4m118.7 61.2c19 4.2 42.7 43.6 52 48.2 9.3 4.2 33.4-4.2 38-8.8 4.6-8.8 9.3-34.8 19-43.6 4.6-8.8 57.1-8.8 66.3-13 9.3-4.2 28.3-43.6 28.3-56.6s-33.4-34.8-47.3-34.8m-208.3-223.5c14.4 4.2 28.3 26.4 38 26.4 4.6 4.2 33.4 4.2 42.7 0 4.6 0 19-78.9 28.3-83 9.3 4.2 19 52.4 19 78.9M6213 8575.6c15.3 30.2 26.9 77.5 11.6 120.6-62.2 163.8-147.5 237.1-267.7 306.2-31.1 17.2-97 13-131.7-4.2-50.6-26-178.1-125.3-217.1-258.9-7.9-34.3-31.1-82.1-19.5-159.6 7.9-39 77.5-176.7 100.7-202.7 23.2-34.3 69.6-64.5 104.8-82.1 54.3-30.2 97-26 159.1 4.2 54.3 26 123.9 73.3 151.2 99.3 31.1 30.6 73.8 112.8 108.6 177.2h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6092.8 8692.5c-19.5 4.2-34.8 8.8-50.6 13-26.9 8.8-46.4 8.8-69.6-8.8-19.5-30.2-34.8-64.5-39-133.6 11.6-34.3 23.2-64.5 50.6-90.5 26.9-4.2 0 39 19.5 73.3 26.9 26 46.4 26 73.8 34.3 11.6 8.8 19.5 26 23.2 52 7.4 38.5 7.4 60.3-7.9 60.3zM5893.3 8644.8c-3.7 26-11.6 52-15.3 73.3-34.8-13-65.9-21.3-93.2-26-34.8 13-58 4.2-62.2-43.1 7.9-56.1 26.9-103.4 77.5-133.6 15.3-17.2 3.7-103.5 39-86.3 11.6 8.8 19.5 21.3 31.1 30.2 11.6 13 23.2 26 15.3 107.6-.1 26.4 4.1 51.9 7.8 77.9h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M5972.7 8696.7c-26.9-21.3-42.7-99.3-39-133.6 11.6-43.1 31.1-73.3 50.6-90.5m57.9 232.5c23.2 0 58-13 62.2-21.3 3.7-13-3.7-39-3.7-52-3.7-21.3-15.3-43.1-23.2-52m-329.8 112.7c39-8.8 81.2 30.2 93.2 26 11.6-4.2 23.2-95.1 11.6-116.4-11.6-26 3.7-82.1 0-103.4-7.9-26-26.9-52-50.6-69.1m-116.4 224c7.9-56.1 19.5-103.5 77.5-138.2M6891.2 8559.4c24.1 46.9 20.4 110.4 4.2 144.7-36.2 64-72.8 127.6-116.9 178.6-32.5 29.7-121.1 106.2-137.3 110.4-32.5 8.4-165.6 13-201.8 0-44.5-17.2-113.2-157.3-133.1-217.1-12.1-55.2-20.4-119.2 4.2-178.6 12.1-51 44.5-115 72.8-148.9 44.5-59.4 88.6-89.5 153.6-127.6 32.5-17.2 88.6-25.5 129.4 0 71.3 59.9 208.6 213 224.9 238.5h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6778 8593.3c12.1 38.5-4.2 51-16.2 72.4-28.3 13-80.7 42.7-104.8 25.5-32.5 4.2-64.5-25.5-56.6-144.7 0-38.5-20.4-157.3 7.9-182.8 76.5 55.2 68.7 46.9 84.9 144.7 28.3 21.3 28.3 33.9 56.6 42.7 12 8.3 24 16.7 28.2 42.2h0zM6523.8 8508.4c-20.4-33.9-88.6-33.9-97-17.2-12.1 8.4-16.2 21.3-20.4 25.5-20.4 29.7-32.5 46.9-36.2 76.5 7.9 29.7 32.5 17.2 44.5 42.7 7.9 13 4.2 29.7 20.4 46.9 28.3 25.5 64.5 17.2 92.8 4.2 4.2-8.4 7.9-21.3 7.9-42.7 0-17.2-20.4-8.4-28.3-17.2-12.1-17.2-4.2-46.9 4.2-64 3.7-7.9 27.8-38 12.1-54.7h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M6604.5 8627.6c4.2-89.5-12.1-259.3 7.9-264 12.1 0 52.4 42.7 64.5 59.4 16.2 17.2 7.9 64 20.4 84.9m-283 123.9c-4.2-8.4-12.1-17.2-20.4-21.3-7.9-4.2-20.4-8.4-24.1-17.2-4.2-8.4 12.1-38.5 16.2-51 4.2-8.4 32.5-51 40.4-55.2 7.9-4.2 44.5-4.2 68.7 0m.4 204c12.1 0 28.3 0 32.5-8.4s7.9-42.7 4.2-46.9c-4.2-8.4-16.2 0-24.1-8.4-4.2-13-4.2-46.9 0-68.2m152.5 131.9c20.4 0 48.2 0 60.8-4.2 7.9-4.2 40.4-17.2 52.4-38.5 7.9-13 4.2-38.5 4.2-51M7248.4 8312.1c-90 86.7-184.2 187.9-265.4 298.8-31.5 43.1-22.3 101.1-4.6 149.4 58.5 125.3 153.1 183.2 206.9 207.4 76.5 14.4 220.4 9.7 260.7-9.7 40.4-19.5 116.9-101.1 130.4-149.4 26.9-82.1 0-183.2-13.5-207.4-13.5-24.1-71.9-72.4-85.4-91.4-13.5-24.1-22.3-48.2-31.5-82.1-8.8-33.9-53.8-91.4-81.2-106.2-39.9-28.8-89-23.7-116.4-9.4z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7351.8 8398.9c13.5 14.4 22.3 33.9 36.2 48.2 4.6 14.4 4.6 24.1 4.6 38.5 18.1 14.4 31.5 24.1 49.6 38.5 0 19.5 4.6 33.9 4.6 52.9 22.3 14.4 40.4 28.8 40.4 67.3v28.8c-22.3 77-94.6 0-139.6-9.7-18.1 0-40.4 4.6-63.1 9.7-13.5 4.6-26.9 9.7-45 14.4-26.9 0-53.8 4.6-81.2 4.6-4.6 4.6-8.8 19.5-31.5 33.9-40.4 0-40.4-14.4-49.6-28.8-4.6-38.5-8.8-77 18.1-110.9 18.1-24.1 36.2-52.9 53.8-52.9 26.9 4.6 53.8 0 81.2-9.7-13.5-33.9-4.6-48.2 22.3-52.9 4.6-9.7 4.6-24.1 4.6-33.9 0-43.1 13.5-72.4 45-72.4 13.9.5 36.2 10.3 49.6 34.4h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#010101"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7486.8 8673.5c0-19.5 0-48.2-4.6-62.6s-31.5-19.5-36.2-33.9c-4.6-19.5 0-43.1-4.6-52.9-8.8-9.7-45-24.1-49.6-33.9-4.6-14.4 4.6-28.8 0-38.5-13.5-24.1-26.9-38.5-45-48.2M7073 8702.3c0-33.9-4.6-72.4 4.6-91.4 9.3-19 45-38.5 49.6-62.6 4.6-24.1 85.4-4.6 98.8-24.1 8.8-4.6-4.6-28.8 0-38.5s18.1-4.6 26.9-14.4c8.8-14.4-4.6-48.2 4.6-67.3 13.5-33.9 22.3-43.1 45-33.9m-144.1 322.4c31.5-9.7 90 4.6 112.3-14.4 18.1-14.4 67.3-19.5 94.6-14.4"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8216.1 8737.5c-14.4 54.7-48.2 154.5-125.7 194.4-48.2 25.1-169.3 25.1-222.2 5.1-62.6-19.9-111.3-25-149.8-45-33.9-25-62.6-69.6-77.5-124.8-4.6-79.8-4.6-174.4 9.7-209.2 53.3-109.5 198.1-269.1 261.2-298.8 38.5-14.8 91.9-19.9 145.2 19.9 38.5 29.7 120.6 169.3 159.6 274.2 13.9 59.9 4.1 129.5-.5 184.2z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M7979 8328.8c33.9 9.7 58 39.9 77.5 69.6 19.5 29.7 38.5 64.9 58 94.6 19.5 34.8 29.2 64.9 29.2 99.7-4.6 29.7-29.2 25.1-53.3 29.7h-62.6c-43.6 5.1-87.2 9.7-130.4 5.1-43.6-5.1-72.4-9.7-96.5 0H7767c-24.1 0-38.5-9.7-29.2-34.8 14.4-39.9 43.6-64.9 77.5-89.5l72.4-59.8c9.7-19.9 19.5-49.6 29.2-69.6 4.1-25 28.7-45 62.1-45h0z"
      ></path>
      <path
        fill="#FAFAFA"
        stroke="#020202"
        strokeMiterlimit="10"
        strokeWidth="10"
        d="M8138.6 8597.9c4.6-34.8-9.7-79.8-24.1-99.7-9.7-19.9-48.2-84.9-72.4-124.8-14.4-25.1-38.5-39.9-58-39.9M7800.4 8623c-19.5 5.1-43.6 5.1-58-5.1-9.7-14.8 0-39.9 9.7-49.6 33.9-54.7 116-99.7 135.5-124.8 9.7-9.7 19.5-49.6 38.5-64.9m-29.2 244.4c62.6 9.7 125.7-5.1 193.4-9.7"
      ></path>
      <path
        fill="none"
        stroke="#EFA8AD"
        strokeMiterlimit="10"
        strokeWidth="80"
        d="M1621.3 5214.8c48.7 7.4 113.7 8.4 167-27.8 68.2-46.4 68.2-120.1 111.3-125.3 55.7-6.5 67.7 116.4 167 153.1 84.9 31.5 124.8-39.9 236.6-13.9 94.2 21.8 93.7 78.9 167 83.5 71 4.6 91.9-47.3 250.5-139.2 97.9-56.6 147.1-84.9 194.8-83.5 69.6 1.9 325.7 198.1 264.4 153.1 100.2-13.9 166.5 6.5 208.8 27.8 66.8 33.9 82.1 75.6 139.2 83.5 57.1 7.9 90.5-26.9 167-69.6 56.6-31.5 192.5-106.7 334-97.4 99.7 6.5 95.1 48.7 250.5 69.6 79.3 10.7 105.8 3.2 153.1 27.8 86.7 45.5 82.6 115 139.2 125.3 65.9 11.6 84-81.2 208.8-125.3 86.7-30.6 174.4-19.9 222.7-13.9 58.9 7.4 153.1 27.8 153.1 27.8 24.1 44.1 64.9 103 125.3 111.3 63.1 8.8 90-46.4 208.8-97.4 65.4-28.3 154.5-66.8 250.5-41.8 57.5 14.8 106.2 49.6 153.1 83.5 77.9 55.7 76.5 77.5 111.3 83.5 76.1 13 102.1-87.7 222.7-125.3 81.2-25.5 179.1-13.9 250.5 27.8 89.5 52 78.9 116.9 153.1 139.2 55.7 16.7 80.3-14.4 222.7-55.7 127.6-37.1 191.1-55.2 250.5-41.8 117.8 26.9 122.9 125.3 236.6 139.2 47.3 5.6 91.9-10.2 180.9-41.8 74.7-26.4 92.3-44.1 194.8-83.5 74.7-28.8 111.8-43.1 139.2-41.8 68.2 2.8 117.8 45.5 208.8 125.3 98.8 86.7 105.8 120.1 153.1 125.3 36.6 4.2 57.1-13 180.9-97.4 169.3-115.5 191.6-125.3 222.7-125.3 49.2-.5 97.9 32.5 194.8 97.4 118.8 79.8 120.1 106.7 167 111.3 72.8 7.4 91.4-55.2 236.6-125.3 79.8-38.5 162.4-78.4 250.5-55.7 31.5 8.4 32 16.2 139.2 83.5 109.5 68.7 165.1 103 194.8 97.4 70.5-13.5 56.1-105.3 167-180.9 19-13 88.6-58.9 180.9-55.7 58.9 2.3 103 23.7 139.2 41.8 113.2 55.7 113.7 109.9 167 111.3 76.1 1.9 84.9-108.1 222.7-167 20.4-8.8 78.4-32.9 153.1-27.8 68.7 4.6 121.5 32 167 55.7 96.5 50.6 95.1 81.6 139.2 83.5 74.7 2.8 81.6-86.7 194.8-125.3 90.9-31.1 208.8-13.9 208.8-13.9s84.4 17.6 139.2 41.8c105.8 46.4 111.8 120.6 167 125.3 67.7 6 69.6-138.2 167-167 59.8-17.6 78.9 27.4 153.1 13.9 93.2-17.2 96.5-94.2 180.9-111.3 54.7-11.1 63.1 19.5 222.7 69.6 110.4 34.8 110.9 21.3 208.8 55.7 117.4 40.8 123.4 62.2 167 55.7 0 0 40.4-6 180.9-139.2h0c34.3 19.5 85.8 40.8 139.2 27.8 63.6-15.3 71-64.9 153.1-111.3 28.3-15.8 102.1-57.5 180.9-41.8 56.6 11.1 58.5 40.4 167 111.3 71.4 46.9 110.9 72.4 167 83.5 40.4 7.9 57.1 1.9 208.8-27.8 203.7-39.9 209.7-36.2 264.4-55.7 69.1-25.1 167-69.6 167-69.6h0s161.4 62.6 250.5 97.4M1593.5 10092.5c131.3 57.5 234.7 62.6 306.2 55.7 96.5-9.3 140.1-40.8 250.5-55.7 138.7-19 176.7 46.9 278.3 13.9 79.3-26 86.3-66.8 153.1-69.6 70-2.8 83 41.8 180.9 69.6 98.3 28.3 113.7-8.8 222.7 13.9 110.4 22.7 122 66.3 208.8 83.5 93.2 18.6 172.1-17.6 264.4-55.7 167.5-69.1 167-125.7 250.5-125.3 103.9.5 114.1 88.6 278.3 125.3 59.8 13.5 111.3 13.5 180.9 13.9 104.8.5 107.6-12.1 208.8-13.9 145.7-2.8 178.6 22.7 264.4 0 38.5-10.2 71.9-31.1 139.2-69.6 107.6-61.7 114.6-83 153.1-83.5 56.1-.5 69.1 45.5 180.9 125.3 88.1 62.6 133.1 95.1 194.8 97.4 53.3 1.9 110.9-31.1 222.7-97.4 132.7-78.4 143.8-103.9 180.9-97.4 84.9 14.8 69.1 155.9 194.8 222.7 71.4 37.6 148.4 30.6 180.9 27.8 89.1-7.9 151.7-45.9 167-55.7 111.3-70.5 109.5-157.7 180.9-167 47.3-6 48.2 32 153.1 69.6h0c63.6 42.2 222.7 41.8 222.7 41.8h0c91.9-94.2 154.9-104.4 194.8-97.4 84.9 14.8 93.7 113.2 194.8 139.2 74.7 19 148-13.9 208.8-41.8 110.9-50.1 118.8-100.7 180.9-97.4 0 0 28.8 1.4 167 97.4h0c65.4 68.2 127.1 80.7 153.1 83.5 111.8 12.5 216.2-70 250.5-97.4 61.7-48.7 69.6-79.3 111.3-83.5 36.2-3.7 58.9 16.2 153.1 83.5 145.7 103.9 165.1 109 180.9 111.3 92.8 13 176.3-54.7 194.8-69.6 88.6-71.9 87.7-149.4 139.2-153.1 46.4-3.2 54.7 58.9 139.2 111.3 9.3 5.6 131.7 79.3 250.5 41.8 96-30.6 101.1-106.2 180.9-111.3 65.9-4.2 74.2 46.9 167 69.6 127.6 31.5 246.8-32 264.4-41.8 105.3-58 116.9-131.7 167-125.3 64.9 8.4 52 131.7 153.1 222.7 83 74.7 226.8 112.7 334 69.6 125.7-51 127.1-184.2 236.6-194.8 16.2-1.4 22.3.9 167 55.7 119.7 45.5 180.5 68.2 208.8 69.6 89.1 4.6 161.9-32 208.8-55.7 113.2-57.1 113.7-104.8 180.9-111.3 71-7 92.8 45 208.8 83.5 52.4 17.6 104.4 20.9 208.8 27.8 152.2 10.2 172.1-5.1 361.8 0 146.1 3.7 150.8 13 194.8 0 115-34.8 131.3-113.7 222.7-125.3 55.7-7 74.2 19.5 208.8 83.5 170.7 81.2 256.1 122 334 111.3 129-17.6 137.8-122.5 264.4-125.3 107.6-2.3 151.7 72.8 222.7 41.8 73.8-32.5 68.7-132.7 125.3-139.2 47.3-5.6 61.2 64 139.2 97.4 82.1 35.3 116.4-20.9 236.6-13.9 154 8.8 179.1 104.8 292.3 83.5 77.9-14.4 87.2-63.6 180.9-83.5 73.3-15.3 138.7-.5 180.9 13.9"
      ></path>
    </svg>
{/* 
			<svg x="0px" y="0px" viewBox="0 0 16383 15308.7" enableBackground="new 0 0 16383 15308.7">

					<text fill='#333333' x='1800' y='3900' style={{fontSize: 250}}>1</text>
					<path fill="#D0C9A3" stroke="#010101" strokeWidth="0.283" strokeMiterlimit="22.926" d="M2025.3,4517.9l-248.2-54.3v-193  c5.6-44.5-33.9-202.7,51-202.7C2003.1,4073,1946.9,4448.8,2025.3,4517.9L2025.3,4517.9z"></path>
					<path id="iso-1" fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M1935.3,5304.7l-315.9-98.8  c-78.9-202.7-56.6-578.9,28.3-851.3c11.1-34.8,56.6-143.3,56.6-197.6c-5.6-89.1,73.3-123.9,112.7-5.1  c22.7,64.5,33.9,143.3,39.4,207.8c33.9-9.7-22.7-287.2,22.7-326.6c22.7-29.7,107.2-14.8,169.3,227.8  c78.9,193,310.3,272.3,276.5,776.6c-5.6,118.8-28.3,197.6-56.6,272.3C2228.5,5299.6,2031.4,5329.7,1935.3,5304.7z"></path>
					


				<g className="1" onClick={() => this.props.onClick(18)}>
					<path id="hcXMLID_14_" style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[18].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M2297.2,5231.4  c-33.9-21.3-140.6,5.1-241.7-32c-39.4-15.8-107.2-79.8-174.4-79.8c-45,0-61.7,53.3-90,64c-33.9,21.3-112.3,15.8-174.4,21.3  c-27.8,32-118.3,138.7-146.1,266.7c-16.7,58.5-16.7,111.8-16.7,117.4c0,26.4,0,69.1,16.7,117.4c16.7,47.8,39.4,122.5,112.3,154.5  c39.4,15.8,73.3,15.8,90,15.8c45,0,84.4-21.3,118.3-42.7c118.3,90.5,247.3,47.8,309,21.3c67.3,26.4,135,32,196.7,15.8  c22.3-5.1,107.2-37.6,151.7-122.5c5.6-5.1,11.1-15.8,11.1-15.8c11.1-15.8,16.7-42.7,16.7-101.6c0-15.8,0-42.7-5.6-74.7  C2449.3,5449.9,2404.3,5300.5,2297.2,5231.4z" style={{cursor: 'pointer'}}></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[18].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M2151.1,5433.7  c-275.6,192.1-151.7,330.3-39.4,426.3 M1774.4,5412.3c320.6,212.9,185.6,346.5,27.8,426.3"></path>
				</g>


				<text fill='#333333' x='2850' y='3800' style={{fontSize: 250}}>2</text>
					<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M3032,5272.2l-328.4-19.9  c-66.8-347.5-138.7-908.8,117.8-1157.4c5.1,0,133.6-154,97.4,74.7c0,25.1-30.6,302.9-30.6,392.5c5.1,228.7,25.5,392.5,97.4,407.3  c46.4,9.7,92.3-148.9,82.1-288.1c-20.4-581.3-117.8-690.3-92.3-754.8c97.4-49.6,225.9,198.5,251.4,268.1  c92.3,243.5,122.9,486.6,143.8,814.6c10.2,109-10.2,198.5-35.7,273.2c-25.5-9.7-77,59.8-102.5,49.6L3032,5272.2z"></path>

				<g className="2" onClick={() => this.props.onClick(17)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[17].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3317.8,5221.6c-5.1-15.8-15.3-47.3-85.8-26.4  c-120.6,36.6-171.2-121.1-342.4-131.7c-302,84-357.2,389.2-377.6,520.5c-30.2,205,80.7,278.8,166.1,294.6  c171.2,10.7,276.9-58,312.2-131.7c25.1,47.3,90.5,179.1,226.4,179.1c130.8-26.4,312.2-162.8,286.7-252.4  C3494,5474,3363.2,5347.8,3317.8,5221.6z" style={{cursor: 'pointer'}}></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[17].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3066.3,5489.8  c-70.5,73.8-100.7,173.5-75.6,257.9 M2849.7,5384.5c85.8,36.6,125.7,126.2,135.9,252.4"></path>
				</g>


				<text fill='#333333' x='3900' y='3800' style={{fontSize: 250}}>3</text>
					<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M4067.4,5190.6l-399.9,118.8l-5.6-228.2  c-45.5-152.2-108.6-266.3-131.3-451.4c-79.8-261.2,74.2-774.7,199.9-574.8c5.6,4.6,0,19,0,28.3c0,80.7,11.6,142.4,0,218.5  c-11.6,80.7,5.6,123.4,57.1,228.2c17.2,33.4,28.8,66.3,45.5,123.4c91.4,166.1,177.2,256.5,257,199.5l28.8-204.1  c17.2-95.1,17.2-80.7,68.7-166.1c39.9-61.7,62.6-128.5,68.7-199.5l-34.3-218.5c11.6-52.4,22.7-99.7,79.8-109.5  c91.4,23.7,148.4,99.7,171.2,147.5c45.5,152.2,68.7,261.2,57.1,418c-11.6,99.7-34.3,190.2-68.7,275.6  c-51.5,128.5-51.5,114.1-45.5,256.5v223.1l-120.1,9.7L4067.4,5190.6z"></path>

				<g className="3" onClick={() => this.props.onClick(16)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[16].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M4422.8,5285.2c-19.9-43.6-120.1-34.8-140.1-43.6  c-39.9-13-70-26.4-135-65.4c-34.8-21.8-75.2-21.8-115-21.8c-30.2,0-54.7,26.4-84.9,34.8l-210.1,65.4c-34.8,17.6-64.9,34.8-84.9,74.2  l-39.9,96l-14.8,34.8c-25.1,34.8-39.9,91.9-45,135.5c-10.2,43.6-10.2,65.4,5.1,109.5c14.8,48.2,34.8,87.2,54.7,126.6  c25.1,48.2,79.8,74.2,109.9,78.9c59.8,4.2,99.7-4.2,164.7-26.4l84.9-30.6c45,48.2,54.7,61.2,79.8,78.9c95.1,70,160,21.8,214.8-48.2  h144.7c19.9-4.2,50.1-26.4,79.8-61.2c59.8-61.2,59.8-70,64.9-148.4c0-70-10.2-70-50.1-131.3c-45-70-50.1-65.4-59.8-148.4l-5.1-61.2  L4422.8,5285.2L4422.8,5285.2z" style={{cursor: 'pointer'}}></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[16].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M4143,5556.1c-54.7,48.2-160,179.1-45,257.9  c14.8,13,34.8,17.6,45,21.8l124.8,48.2"></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[16].condition)}  stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M3918.1,5451.3c64.9,39.4,90,100.7,120.1,153.1  c39.9,70-10.2,187.9-64.9,244.9"></path>
				</g>

				<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M4987.3,5406.7l-187.9-84.9  c-4.6-170.3-52.9-330.3-33.9-530.2c4.6-80.3,52.9-129.9,58-185.1c33.9-240.3,19.5-455.5,28.8-700.5c0-70,120.6-135,187.9,0  c159.1,440.2,144.7,935.7,110.9,1406.1L4987.3,5406.7z"></path>
				<text fill='#333333' x='4850' y='3750' style={{fontSize: 250}}>4</text>

				<g onClick={() => this.props.onClick(15)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[15].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M5240.2,5473.1c4.6,0,8.8,4.6,18.1,13.5  c53.8,80.7,63.1,152.6,45,233.3c0,13.5-4.6,31.5-8.8,40.4c-53.8,76.5-130.4,148.4-270,247.3c-26.9,18.1-90,18.1-116.9,4.6  c-98.8-40.4-175.4-85.4-247.7-152.6c-49.6-71.9-40.4-148.4-18.1-233.3c22.7-130.4,98.8-242.6,161.9-359.5  c49.6-22.3,98.8-22.3,175.4-22.3c63.1,0,103.4,0,157.7,18.1C5181.7,5311.6,5190.5,5387.7,5240.2,5473.1z M5235.5,5473.1  c-81.2,40.4-135,98.8-171.2,166.1" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='5650' y='3850' style={{fontSize: 250}}>5</text>
				<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M5660.9,5421.1l154-116  c58-116,53.8-206,26.9-416.6c-15.3-210.6-19.5-416.6-77-682.9c-42.2-210.6-154-176.3-169.8-68.7  c-46.4,330.8-161.9,592.9-96.5,1159.7L5660.9,5421.1z"></path>
				<path fill='#F2ECBE' stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M6503.4,5388.2l-142.9,47.3l-149.8-43.6  c-52.4-123.9-52.4-189.3-48.7-342.4c0-113.2,87.2-357.2,73.3-459.3c7-193-20.9-328-13.9-506.6c0-123.9,104.8-105.8,149.8-7.4  C6520.5,4408,6513.6,5034.7,6503.4,5388.2L6503.4,5388.2z"></path>

				<g onClick={() => this.props.onClick(14)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[14].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M5962.9,5624.3c22.7,46.4,26.4,97-3.7,143.3  c-86.7,101.1-166.1,177.2-301.5,231.9c-33.9-4.2-71.4-25.1-90.5-67.3c-22.7,29.7-37.6,33.9-71.4,38  c-83-46.4-154.5-143.3-131.7-345.6c26.4-126.6,60.3-236.1,135.9-324.7c64-63.1,241.2-88.6,324.3,20.9  C5898.9,5426.2,5925.3,5506.5,5962.9,5624.3L5962.9,5624.3z" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='6150' y='3800' style={{fontSize: 250}}>6</text>
				<path fill='#F2ECBE' stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M6991.4,5574.7l217.6-84.9  c19.5-3.7,29.2-38.5,33.9-58c43.6-119.7-130.8-444-149.8-687c-9.7-92.8-24.1-196.7-67.7-274.2c-87.2-212.5-207.8-169.8-217.6-54.3  c0,26.9,9.7,61.7,9.7,84.9c33.9,374.4-72.4,779.8-14.4,899.5c14.4,31.1,24.1,65.4,38.5,84.9L6991.4,5574.7z"></path>

				<g onClick={() => this.props.onClick(13)}>
					<path id="fdXMLID_41_" style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[13].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M6505.2,5349.7  c18.6,89.1,14.8,129.9,48.2,200.9c174.9,241.7,129.9,341.9-103.9,482.9c-33.4,18.6-55.7,44.5-111.3,37.1  c-59.4-18.6-96.5-74.2-96.5-74.2c-7.4-3.7-7.4,26-29.7,26c-137.3-33.4-219.4-200.9-171.2-371.6c52-96.5,133.6-289.9,141-304.8  c14.8-40.8,89.1-74.2,152.6-74.2c55.7-3.7,96.5,11.1,137.3,33.4C6486.7,5312.6,6497.8,5331.1,6505.2,5349.7L6505.2,5349.7z" style={{cursor: 'pointer'}}></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[13].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6251.9,5898.5c38.5-108.1,9.7-197.6-96-284.8"></path>
				</g>


				<text fill='#333333' x='6800' y='4000' style={{fontSize: 250}}>7</text>
				<path fill="#F2ECBE" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M7820.8,5564.9L7639,5454.1  c-24.1-73.8-44.5-648.5,97-993.7c149.8-328.4,242.6-94.2,258.9,4.2c16.2,172.6,16.2,336.8,64.5,517.2  c40.4,143.8,60.8,377.6,20.4,574.8L7820.8,5564.9z"></path>
				<g onClick={() => this.props.onClick(12)}>
					<path id="euXMLID_30_" style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[12].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M7464.6,5952.3  c10.2,97.4-71,97.4-157.3,93.2c-45.5,24.1-81.2,32.5-162.4,36.6c-50.6-4.2-157.3-4.2-182.3-44.5c-30.6,28.3-106.7,12.1-126.6-4.2  c-172.6-89.1-136.9-360.9-35.7-551.6c10.2-12.1,45.5-89.1,65.9-93.2c121.5-36.6,207.8-40.4,344.7,0c15.3,4.2,35.7,28.3,40.4,48.7  C7322.6,5648,7378.3,5717.1,7464.6,5952.3z" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='7700' y='4100' style={{fontSize: 250}}>8</text>
				<path fill='#ee4455' stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8025.4,6097.5c-5.6-63.1-5.6-105.8,2.8-156.3   M7801.4,6059.4c-2.8-25.5-2.8-101.1,0-126.6"></path>
				<path fill='#F2ECBE' stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M14522.8,5346.9l315.9-98.8  c78.9-202.7,56.6-578.9-28.3-851.3c-11.1-34.8-56.6-143.3-56.6-197.6c5.6-89.1-73.3-123.9-112.7-5.1  c-22.7,64.5-33.9,143.3-39.4,207.8c-33.9-9.7,22.7-287.2-22.7-326.6c-22.7-29.7-107.2-14.8-169.3,227.8  c-78.9,193-310.3,272.3-276.5,776.6c5.6,118.8,28.3,197.6,56.6,272.3C14229.1,5341.8,14426.8,5372,14522.8,5346.9z"></path>

				<g onClick={() => this.props.onClick(11)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[11].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8087.1,5477.3c3.7,7,0,13.5,0,17.2  c39,187,114.1,323.3,114.1,401.3c0,64.5,3.7,231.5-167.5,190.7c-14.4-10.2-21.3-13.5-32-7c-14.4,20.4-114.1,47.8-245.4-17.2  c-17.6-20.4-35.7-10.2-46.4-10.2c-146.1-58-217.1-98.8-170.7-278.8c71-296,124.8-466.2,327.5-438.8  c92.8,13.5,149.4,68.2,202.7,122.5C8073.2,5460.1,8083.9,5470.3,8087.1,5477.3L8087.1,5477.3z" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='8400' y='4100' style={{fontSize: 250}}>9</text>
				<path fill='#F2ECBE' stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M13426.1,5314.4l328.4-19.9  c66.8-347.5,138.7-908.8-117.8-1157.4c-5.1,0-133.6-154-97.4,74.7c0,25.1,30.6,302.9,30.6,392.5c-5.1,228.7-25.5,392.5-97.4,407.3  c-46.4,9.7-92.3-148.9-82.1-288.1c20.4-581.3,117.8-690.3,92.3-754.8c-97.4-49.6-225.9,198.5-251.4,268.1  c-92.3,243.5-122.9,486.6-143.8,814.6c-10.2,109,10.2,198.5,35.7,273.2c25.5-9.7,77,59.8,102.5,49.6L13426.1,5314.4z"></path>

				<g onClick={() => this.props.onClick(21)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[21].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8370.6,5513.4c-3.7,7,0,13.5,0,17.2  c-39,187-114.1,323.3-114.1,401.3c0,64.5-3.7,231.5,167.5,190.7c14.4-10.2,21.3-13.5,32-7c14.4,20.4,114.1,47.8,245.4-17.2  c17.6-20.4,35.7-10.2,46.4-10.2c146.1-58,217.1-98.8,170.7-278.8c-71-296-124.8-466.2-327.5-438.8  c-92.8,13.5-149.4,68.2-202.7,122.5C8384.9,5496.7,8374.3,5506.9,8370.6,5513.4L8370.6,5513.4z" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='9200' y='4100' style={{fontSize: 250}}>10</text>
				<path fill='#F2ECBE' stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M12390.7,5232.8l399.9,118.8l5.6-228.2  c45.5-152.2,108.6-266.3,131.3-451.4c79.8-261.2-74.2-774.7-199.9-574.8c-5.6,4.6,0,19,0,28.3c0,80.7-11.6,142.4,0,218.5  c11.6,80.7-5.6,123.4-57.1,228.2c-17.2,33.4-28.8,66.3-45.5,123.4c-91.4,166.1-177.2,256.5-257,199.5l-28.8-204.1  c-17.2-95.1-17.2-80.7-68.7-166.1c-39.9-61.7-62.6-128.5-68.7-199.5l34.3-218.5c-11.6-52.4-22.7-99.7-79.8-109.5  c-91.4,23.7-148.4,99.7-171.2,147.5c-45.5,152.2-68.7,261.2-57.1,418c11.6,99.7,34.3,190.2,68.7,275.6  c51.5,128.5,51.5,114.1,45.5,256.5v223.1l120.1,9.7L12390.7,5232.8z"></path>

				<g onClick={() => this.props.onClick(22)}>
					<path id="euXMLID_1_" style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[22].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8993.6,5988.5  c-10.2,97.4,71,97.4,157.3,93.2c45.5,24.1,81.2,32.5,162.4,36.6c50.6-4.2,157.3-4.2,182.3-44.5c30.6,28.3,106.7,12.1,126.6-4.2  c172.6-89.1,136.9-360.9,35.7-551.6c-10.2-12.1-45.5-89.1-65.9-93.2c-121.5-36.6-207.8-40.4-344.7,0c-15.3,4.2-35.7,28.3-40.4,48.7  C9135.5,5684.2,9079.9,5753.3,8993.6,5988.5z" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='9900' y='4000' style={{fontSize: 250}}>11</text>

				<g onClick={() => this.props.onClick(23)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[23].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10206.2,5974.6c-38.5-90-9.7-164.7,96-237.1"></path>
					<path id="fdXMLID_1_" style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[23].condition)}  stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M9952.9,5409.1  c-18.6,86.3-14.8,125.7-48.2,194.4c-174.9,233.8-129.9,330.8,103.9,467.6c33.4,18.1,55.7,43.1,111.3,36.2  c59.4-18.1,96.5-71.9,96.5-71.9c7.4-3.7,7.4,25.1,29.7,25.1c137.3-32.5,219.4-194.4,171.2-360c-52-93.7-133.6-280.7-141-295  c-14.8-39.4-89.1-71.9-152.6-71.9c-55.7-3.7-96.5,10.7-137.3,32.5C9971.5,5372.9,9960.3,5391,9952.9,5409.1L9952.9,5409.1z" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='10600' y='4000' style={{fontSize: 250}}>12</text>
				<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M11470.8,5449l187.9-84.9  c4.6-170.3,52.9-330.3,33.9-530.2c-4.6-80.3-52.9-129.9-58-185.1c-33.9-240.3-19.5-455.5-28.8-700.5c0-70-120.6-135-187.9,0  c-159.1,440.2-144.7,935.7-110.9,1406.1L11470.8,5449z"></path>
				<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M10797.2,5463.3l-154-116  c-58-116-53.8-206-26.9-416.6c15.3-210.6,19.5-416.6,77-682.9c42.2-210.6,154-176.3,169.8-68.7c46.4,330.8,161.9,592.9,96.5,1159.7  L10797.2,5463.3z"></path>

				<g onClick={() => this.props.onClick(24)}>
				<path  style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[24].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M10494.7,5666.5  c-22.7,46.4-26.4,97,3.7,143.3c86.7,101.1,166.1,177.2,301.5,231.9c33.9-4.2,71.4-25.1,90.5-67.3c22.7,29.7,37.6,33.9,71.4,38  c83-46.4,154.5-143.3,131.7-345.6c-26.4-126.6-60.3-236.1-135.9-324.7c-64-63.1-241.2-88.6-324.3,20.9  C10559.2,5468.4,10532.8,5548.7,10494.7,5666.5L10494.7,5666.5z" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='11400' y='3800' style={{fontSize: 250}}>13</text>
				<path fill='#F2ECBE' stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M9954.8,5446.2l142.9,45.9l149.8-42.2  c52.4-120.1,52.4-183.2,48.7-331.7c0-109.5-87.2-345.6-73.3-444.4c-7-187,20.9-317.3,13.9-490.3c0-120.2-104.8-102.5-149.8-7  C9937.6,4497.5,9944.6,5104.3,9954.8,5446.2L9954.8,5446.2z"></path>

				<g onClick={() => this.props.onClick(25)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[25].condition)}  stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M11321.4,5304.2c53.8-18.1,94.6-18.1,157.7-18.1  c76.5,0,126.2,0,175.4,22.3c63.1,116.9,139.6,229.2,161.9,359.5c22.3,85.4,31.5,161.9-18.1,233.3  c-71.9,67.3-148.4,112.3-247.7,152.6c-26.9,13.5-90,13.5-116.9-4.6c-139.6-98.8-216.2-170.7-270-247.3c-4.6-8.8-8.8-26.9-8.8-40.4  c-18.1-80.7-8.8-152.6,45-233.3c8.8-8.8,13.5-13.5,18.1-13.5C11267.1,5429.9,11276.4,5353.9,11321.4,5304.2z M11393.3,5681.8  c-36.2-67.3-90-125.7-171.2-166.1" style={{cursor: 'pointer'}}></path>
				</g>


				<text fill='#333333' x='12200' y='3800' style={{fontSize: 250}}>14</text>
				<path fill='#F2ECBE' stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M9466.7,5610.9l-217.6-84.9  c-19.5-3.7-29.2-38.5-33.9-58c-43.6-119.7,130.8-444,149.8-687c9.7-92.8,24.1-196.7,67.7-274.2c87.2-212.5,207.8-169.8,217.6-54.3  c0,26.9-9.7,61.7-9.7,84.9c-33.9,374.4,72.4,779.8,14.4,899.5c-14.4,31.1-24.1,65.4-38.5,84.9L9466.7,5610.9z"></path>

				<g onClick={() => this.props.onClick(26)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[26].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M12035.4,5327.4c19.9-43.6,120.1-34.8,140.1-43.6  c39.9-13,70-26.4,135-65.4c34.8-21.8,75.2-21.8,115-21.8c30.2,0,54.7,26.4,84.9,34.8l210.1,65.4c34.8,17.6,64.9,34.8,84.9,74.2  l39.9,96l14.8,34.8c25,34.8,39.9,91.9,45,135.5c10.2,43.6,10.2,65.4-5.1,109.5c-14.8,48.2-34.8,87.2-54.7,126.6  c-25.1,48.2-79.8,74.2-109.9,78.9c-59.8,4.2-99.7-4.2-164.7-26.4l-84.9-30.6c-45,48.2-54.7,61.2-79.8,78.9  c-95.1,70-160,21.8-214.8-48.2h-144.7c-19.9-4.2-50.1-26.4-79.8-61.2c-59.8-61.2-59.8-70-64.9-148.4c0-70,10.2-70,50.1-131.3  c45-70,50.1-65.4,59.8-148.4l5.1-61.2L12035.4,5327.4L12035.4,5327.4z" style={{cursor: 'pointer'}}></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[26].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M12540.1,5493.5c-64.9,39.4-90,100.7-120.1,153.1  c-39.9,70,10.2,187.9,64.9,244.9"></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[26].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M12315.1,5598.3c54.7,48.2,160,179.1,45,257.9  c-14.8,13-34.8,17.6-45,21.8l-124.8,48.2"></path>

				</g>




				<text fill='#333333' x='13200' y='3800' style={{fontSize: 250}}>15</text>
				<path fill="#F2ECBE" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8637.3,5601.1l181.8-110.9  c24.1-73.8,44.5-648.5-97-993.7c-149.8-328.4-242.6-94.2-258.9,4.2c-16.2,172.6-16.2,336.8-64.5,517.2  c-40.4,143.8-60.8,377.6-20.4,574.8L8637.3,5601.1z"></path>

				<g onClick={() => this.props.onClick(27)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[27].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8429.9,5968.1c8.4,50.6,8.4,92.8,2.8,156.3   M8656.3,5959.7c2.8,25.5,2.8,101.1,0,126.6"></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[27].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13467,5789.5c25.1-84-5.1-184.2-75.6-257.9   M13472.1,5679.1c10.2-126.2,50.1-215.7,135.9-252.4"></path>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[27].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13139.9,5263.9c5.1-15.8,15.3-47.3,85.8-26.4  c120.6,36.6,171.2-121.1,342.4-131.7c302,84,357.2,389.2,377.6,520.5c30.2,205-80.7,278.8-166.1,294.6  c-171.2,10.7-276.9-58-312.2-131.7c-25.1,47.3-90.5,179.1-226.4,179.1c-130.8-26.4-312.2-162.8-286.7-252.4  C12964.1,5516.2,13094.9,5390,13139.9,5263.9z" style={{cursor: 'pointer'}}></path>

				</g>




	<text fill='#333333' x='14400' y='3800' style={{fontSize: 250}}>16</text>
	<path fill='#F2ECBE' stroke="#010101" strokeWidth="0.283" strokeMiterlimit="22.926" d="M14432.3,4560.1l248.2-54.3v-193  c-5.6-44.5,33.9-202.7-51-202.7C14455.1,4114.8,14511.2,4491,14432.3,4560.1L14432.3,4560.1z"></path>
	<path fill="#F2ECBE" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M2420.6,9977.1c-196.7-28.3-372-56.1-568.3-84.4  c-90.5,28.3-175.4,62.2-265.8,90c-26.4,253.3-10.7,585.9,5.1,636.5c10.7,33.9,37.1,84.4,42.7,129.4c26.4,163.3-10.7,462,15.8,489.9  c21.3,39.4,47.8,50.6,79.8,39.4c26.4,0,42.7-33.9,58.5-78.9c0-5.6,5.1-5.6,5.1-5.6c-5.1,50.6,10.7,107.2,42.7,118.3  c79.8,16.7,164.7-33.9,191.1-56.1c207.4-141,340-304.3,419.8-749.2C2457.7,10433.1,2495.3,10084.2,2420.6,9977.1L2420.6,9977.1z"></path>

				<g onClick={() => this.props.onClick(28)}>
					<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[28].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M14346.5,5902.2c112.3-96,236.1-234.3-39.4-426.3   M14655.5,5880.8c-157.7-79.8-292.7-213.4,27.8-426.3"></path>
					<path id="hcXMLID_1_" style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[28].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M14160.5,5273.6  c33.9-21.3,140.6,5.1,241.7-32c39.4-15.8,107.2-79.8,174.4-79.8c45,0,61.7,53.3,90,64c33.9,21.3,112.3,15.8,174.4,21.3  c27.8,32,118.3,138.7,146.1,266.7c16.7,58.5,16.7,111.8,16.7,117.4c0,26.4,0,69.1-16.7,117.4c-16.7,47.8-39.4,122.5-112.3,154.5  c-39.4,15.8-73.3,15.8-90,15.8c-45,0-84.4-21.3-118.3-42.7c-118.3,90.5-247.3,47.8-309,21.3c-67.3,26.4-135,32-196.7,15.8  c-22.3-5.1-107.2-37.6-151.7-122.5c-5.6-5.1-11.1-15.8-11.1-15.8c-11.1-15.8-16.7-42.7-16.7-101.6c0-15.8,0-42.7,5.6-74.7  C14008.8,5492.1,14053.8,5342.7,14160.5,5273.6z" style={{cursor: 'pointer'}}></path>

	</g>


<g onClick={() => this.props.onClick(38)}>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[38].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M2070.8,9490c101.1-77.9,223.6-176.3,329.8-171.2  c74.7-10.2,202.3,155.9,218,259.3c21.3,93.2-47.8,254.2-90.5,296c-21.3,26-47.8,83-47.8,124.3c0,31.1,5.6,72.8-32,98.8  c-148.9-41.3-250-26-297.8-10.2c-69.1,20.9-164.7,41.3-207.4,41.3c-32,0-127.6-20.9-196.7-46.9c-47.8-10.2-85.4-15.8-143.8,0  c-53.3,0-96-150.3-127.6-228.2c-21.3-62.2-15.8-161,10.7-218c32-98.8,106.7-202.3,228.7-264.9c58.5-26,127.6-31.1,180.9-5.1  C1948.3,9396.3,2006.8,9432.9,2070.8,9490L2070.8,9490z" style={{cursor: 'pointer'}}></path>
	<path fill="#F2ECBE" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M3511.2,10081.9c31.1,62.6,36.6,354.4,20.9,439.8  c-5.1,157.3-281.1,852.2-463.4,780.7c-46.9-18.1,67.7-318.7,83.5-372.5c72.8-273.7-5.1-439.8-26-462  c-57.1,8.8-57.1,188.3-72.8,233.3c-5.1,31.5-93.7,152.6-98.8,246.8c-10.2,49.2-46.9,282.5-135.5,278.3  c-57.1-8.8-88.6-129.9-114.6-497.8c-15.8-215.2,0-430.5,41.8-641.6l135.5-67.3L3511.2,10081.9z"></path>
</g>

<g onClick={() => this.props.onClick(37)}>
<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[37].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M3457.4,9436.2c32-9.3,68.7-13.9,100.7,0  c52.9,42.2,238,196.2,180,317.8c-15.8,28.3-127.1,294.6-201.3,331.7c-116.4,74.7-270,98.3-317.3,98.3c-90-4.6-169.3-74.7-275.1-84  c-79.3,0-174.9,18.6-201.3-9.3c-52.9-84-127.1-285.3-84.9-430c37.1-98.3,201.3-341,391.5-261.6c68.7,37.6,127.1,121.5,201.3,177.7  C3293.6,9524.8,3378.1,9473.3,3457.4,9436.2z" style={{cursor: 'pointer'}}></path>
<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[37].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M3251,9561c-42.2,46.9-74.2,126.2-68.7,196.2   M3288.1,9799.4c-95.1-84-232.9-23.2-259.3-9.3"></path>

</g>
		<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M4737.8,10032.7  c29.7,63.6,69.6,122.5,84.4,186.5c39.9,152.2,54.7,490.3,34.8,657.3c-29.7,299.2-174,568.7-253.3,353  c-19.9-58.9-25.1-270-25.1-299.2c0-73.8-14.8-166.5-49.6-259.8c-54.7-142.4-99.3-269.5-179.1-230.6c-25.1,9.7-25.1,206-44.5,441.6  c-5.1,68.7-25.1,225.5-44.5,279.7c-14.8,49.2-59.8,166.5-119.2,137.3c-54.7-14.8-79.3-137.3-104.4-534.9  c0-78.4-19.9-161.9-29.7-245.4c-5.1-63.6-29.7-245.4-5.1-377.6l148.9-127.6L4737.8,10032.7z"></path>
		<path fill="#F2EBBD" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M5321.3,10116.7l-184.6-4.2  c-97.4,579.4,66.8,686.6,82.1,854c0,64.5-10.2,116-10.2,167.5c5.1,291.8,122.9,394.8,292.3-141.5c77-240.3,102.5-604.9,25.5-892.5  L5321.3,10116.7z"></path>

<g  onClick={() => this.props.onClick(36)}>
<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[36].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M4615.3,9433.9c-98.8,4.6-244.5,97-276,119.2  c-10.2,8.8-98.8-110.4-244.9-92.8c-83.5,17.6-114.6,101.6-124.8,128c-67.7-31.1-150.8-17.6-187.4,52.9  c-20.9,52.9-20.9,180.9,20.9,251.4c20.9,44.1,130.4,176.3,197.6,238.4c15.8,17.6,124.8-4.6,187.4,0c197.6,8.8,468.5,48.7,593.3-79.3  c15.8-17.6,31.1-57.5,36.6-84c26-141,41.8-251.4,10.2-405.9C4813.4,9504.4,4740.5,9416.2,4615.3,9433.9z" style={{cursor: 'pointer'}}></path>
	
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[36].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M4313.3,9808.7c-15.8-84-31.1-220.8,36.6-260.2   M3985.3,9773.4c-26-61.7-31.1-154.5-15.8-185.1"></path>

</g>

	<g onClick={() => this.props.onClick(35)}>
		<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[35].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M5701.3,9630.1c10.2,38.5,10.2,72.8,0,107.2  c-15.3,38.5-75.6,98.8-121.1,184.6c-25.1,68.7-40.4,146.1-65.9,197.6c-121.1,94.6-272.8,77.5-384.1,13  c-30.2-47.3-85.8-219-207.4-347.5c-50.6-68.7-65.9-150.3-35.3-188.8c40.4-51.5,116.4-64.5,192.1-72.8c35.3-13,75.6-81.6,171.6-111.8  c35.3-13,70.5-13,121.1,4.2c45.5,34.3,80.7,64.5,126.2,85.8C5549.6,9505.8,5686,9509.9,5701.3,9630.1L5701.3,9630.1z" style={{cursor: 'pointer'}}></path>
		<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[35].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M5499,9505.8c-65.9,0-80.7,146.1-55.7,214.8   M5079.7,9522.9c65.9,8.8,96,124.3,90.9,188.8"></path>

	</g>

<g onClick={() => this.props.onClick(34)}>
<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[34].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M6393.4,9761.8c17.2-91.9,34.8-198.5-8.8-261.2  c-47.8-63.1-165.1-14.4-265.4-82.1c-30.6-24.1-82.6-19.5-100.2,4.6c-13,14.4-39,38.5-56.6,48.2c-69.6,38.5-152.2,111.3-208.8,164.7  c-30.6,38.5-17.2,149.8,4.2,198.5c113.2,183.7,117.4,270.9,156.3,406.4c4.2,4.6,13,14.4,17.2,14.4c212.9,0,321.9-38.5,330.3-58  C6302,10061.5,6376.3,9863,6393.4,9761.8z" style={{cursor: 'pointer'}}></path>
</g>

<g onClick={() => this.props.onClick(33)}>
<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[33].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M7013.2,9532.2c85.8,72.4-85.8,362.8-89.5,449.5  c-3.7,45-3.7,86.3-22.3,128c-78.4,58.9-242.2,41.3-294.1,7c-48.2-52-29.7-183.2-48.2-217.6c-63.1-117.4-163.8-186.5-74.2-317.8  c71-90,201.3-204.1,271.8-204.1C6823.5,9376.3,6987.2,9494.2,7013.2,9532.2L7013.2,9532.2z" style={{cursor: 'pointer'}}></path>

</g>

	<path fill="#F2EBBD" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6110,10164l-178.1,68.7  c-25.5,298.8,80.7,710.2,106.2,879.6c89.1,742.2,356.3-318.7,216.2-927.8L6110,10164z"></path>
	<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6727,10018.4l-119.7,71.4  c-77,151.7-34.8,686.6-23.2,888.8c15.3,320.1,150.3,341,173.5,345.1c165.6,25.1,215.7-1132.8,127.1-1255.3L6727,10018.4z"></path>
	
	<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7305.9,10007.7l-103,141  c-87.7,432.8,15.3,766.8,38,964.4c84,442.1,114.1,254.2,175.4-32.9c76.1-329.4,72.4-729.2,45.9-988.1L7305.9,10007.7z"></path>
	<g onClick={() => this.props.onClick(32)}>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[32].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7454.8,10112.5c-26.4,57.5-225,68.2-251.4,50.6  c-3.7-3.7-7.4-10.7-11.1-14.4c-63.6-136.8-221.3-594.3-22.7-698.6c67.7-3.7,157.7-14.4,217.6-32.5c37.6-7,75.2-32.5,97.4-18.1  c45,14.4,90,100.7,90,154.9C7552.7,9748.8,7470.1,10119.5,7454.8,10112.5z" style={{cursor: 'pointer'}}></path>
	</g>
	<g onClick={() => this.props.onClick(31)}>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[31].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8257.8,9519.7c-5.6,231-22.3,420.3-93.7,605.9  c-49.6,49.6-248.2,156.8-403.1,53.8c-93.7-197.6-138.2-441.2-143.3-668c0-24.6,22.3-45.5,66.3-70c132.7-45.5,364.2-57.5,508-4.2  C8224.9,9445.4,8252.3,9490.9,8257.8,9519.7L8257.8,9519.7z" style={{cursor: 'pointer'}}></path>

	</g>
		
	<path fill="#F2ECBE" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8180.4,10115.3  c-64.9-13.5-130.4-22.3-195.3-31.1c-77,31.1-160,58-237.1,84.9c0,116,0,214.3,12.1,326.1c6,66.8,17.6,80.3,23.7,129.4  c83,214.3,83,379.5,77,602.6c-12.1,147.5,171.6,196.7,219.4-31.1C8174.8,10775.9,8228.1,10298.1,8180.4,10115.3L8180.4,10115.3z"></path>
	<g onClick={() => this.props.onClick(48)}> 
		<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[48].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M14489.8,9490c64-57.1,122.5-93.2,175.8-124.3  c53.3-26,122.5-20.9,180.9,5.1c122.5,62.2,196.7,166.1,228.7,264.9c26.4,57.1,32,155.9,10.7,218c-32,77.9-74.7,228.2-127.6,228.2  c-58.5-15.8-95.6-10.2-143.8,0c-69.1,26-165.1,46.9-196.7,46.9c-42.7,0-138.2-20.9-207.4-41.3c-47.8-15.8-148.9-31.1-297.8,10.2  c-37.1-26-32-67.3-32-98.8c0-41.3-26.4-98.8-47.8-124.3c-42.7-41.3-111.8-202.3-90.5-296c15.8-103.9,143.8-270,218-259.3  C14266.2,9313.2,14388.7,9412,14489.8,9490L14489.8,9490z" style={{cursor: 'pointer'}}></path>
	</g>
	<path fill="#F2ECBE" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M14139.6,9977.1  c-74.2,107.2-37.1,456.5-26.4,529.3c79.8,444.9,212.5,608.2,419.8,749.2c26.4,22.3,111.8,73.3,191.1,56.1  c32-11.1,47.8-67.7,42.7-118.3c0,0,5.1,0,5.1,5.6c15.8,45,32,78.9,58.5,78.9c32,11.1,58.5,0,79.8-39.4  c26.4-28.3-10.7-326.6,15.8-489.9c5.1-45,32-95.6,42.7-129.4c15.8-50.6,32-383.2,5.1-636.5c-90.5-28.3-175.4-62.2-265.8-90  C14511.7,9920.5,14336.3,9948.8,14139.6,9977.1L14139.6,9977.1z"></path>
	<path fill="#F2ECBE" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M13679,10019.3l135.5,67.3  c41.8,210.6,57.1,426.3,41.8,641.6c-26,367.9-57.1,488.9-114.6,497.8c-88.6,4.6-124.8-228.7-135.5-278.3  c-5.1-94.2-93.7-215.2-98.8-246.8c-15.8-45-15.8-224.5-72.8-233.3c-20.9,22.3-98.8,188.3-26,462c15.8,53.8,130.4,354.4,83.5,372.5  c-182.3,71.9-458.3-623.5-463.4-780.7c-15.8-85.4-10.2-376.7,20.9-439.8L13679,10019.3z"></path>
	<g onClick={() => this.props.onClick(47)}>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[47].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M13309.2,9576.3  c74.2-56.1,132.2-140.1,201.3-177.7c190.7-79.3,354.4,163.8,391.5,261.6c42.2,144.7-32,346.1-84.9,430  c-26.4,27.8-121.5,9.3-201.3,9.3c-105.8,9.3-185.1,79.3-275.1,84c-47.8,0-201.3-23.2-317.3-98.3c-74.2-37.6-185.1-303.9-201.3-331.7  c-58.5-121.5,127.1-275.6,180-317.8c32-13.9,68.7-9.3,100.7,0C13182.1,9473.3,13267,9524.8,13309.2,9576.3z" style={{cursor: 'pointer'}}></path>
	</g>
	

	<g onClick={() => this.props.onClick(46)}>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[46].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M11731.5,9561.9  c-31.1,154.5-15.8,264.9,10.7,405.9c5.1,26.4,20.9,66.3,36.6,84c124.8,128,395.7,88.1,593.3,79.3c62.6-4.6,171.6,17.6,187.4,0  c67.7-61.7,177.2-193.9,197.6-238.4c41.8-70.5,41.8-198.5,20.9-251.4c-36.6-70.5-119.7-84-187.4-52.9  c-10.7-26.4-41.8-110.4-124.8-128c-145.7-17.6-234.3,101.6-244.9,92.8c-31.1-22.3-177.2-114.6-276-119.2  C11820.1,9416.2,11747.3,9504.4,11731.5,9561.9z" style={{cursor: 'pointer'}}></path>

	</g>

	<g onClick={() => this.props.onClick(45)}>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[45].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M13378.3,9757.2c5.1-70-26.4-149.4-68.7-196.2   M13531.4,9790.1c-26.4-13.9-164.2-74.7-259.3,9.3"></path>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[45].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M12210.7,9548.4c67.7,39.9,52,176.3,36.6,260.2   M12590.6,9588.3c15.8,31.1,10.2,123.4-15.8,185.1"></path>

	</g>
	<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="22.926" d="M12409.3,10012.8l148.9,127.6  c25,132.7,0,314.1-5.1,377.6c-9.7,83.5-29.7,166.5-29.7,245.4c-25,397.1-49.6,520-104.4,534.9c-59.8,29.2-104.4-88.1-119.2-137.3  c-19.9-53.8-39.9-211.1-44.5-279.7c-19.9-235.7-19.9-431.4-44.5-441.6c-79.3-39.4-124.3,88.1-179.1,230.6  c-34.8,93.2-49.6,186.5-49.6,259.8c0,29.2-5.1,240.3-25,299.2c-79.3,215.7-223.6-53.8-253.3-353c-19.9-166.5-5.1-505.2,34.8-657.3  c14.8-63.6,54.7-122.5,84.4-186.5L12409.3,10012.8z"></path>
	

	<g onClick={() => this.props.onClick(44)}> 
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[44].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M10859.4,9630.1  c15.3-120.1,151.7-124.3,202.3-129c45.5-21.3,80.7-51.5,126.2-85.8c50.6-17.2,85.8-17.2,121.1-4.2c96,30.2,136.4,98.8,171.6,111.8  c75.6,8.4,151.7,21.3,192.1,72.8c30.2,38.5,15.3,120.1-35.3,188.8c-121.1,129-176.7,300.6-207.4,347.5  c-111.3,64.5-262.6,81.6-384.1-13c-25-51.5-40.4-129-65.9-197.6c-45.5-85.8-106.2-146.1-121.1-184.6  C10849.2,9702.9,10849.2,9668.6,10859.4,9630.1L10859.4,9630.1z"></path>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[44].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M11117.3,9720.1c25-68.7,10.2-214.8-55.7-214.8   M11390.1,9711.7c-5.1-64.5,25.1-180.5,90.9-188.8"></path>

	</g>
	<path fill="#F2EBBD" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M11034.3,10099.5c-77,287.6-51,652.2,25.5,892.5  c169.3,536.3,287.2,433.3,292.3,141.5c0-51.5-10.2-103-10.2-167.5c15.3-167.5,179.5-274.6,82.1-854l-184.6,4.2L11034.3,10099.5z"></path>
		<path fill="#F2EBBD" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10305.9,10184.4  c-140.1,609.1,127.1,1670,216.2,927.8c25.5-169.3,131.3-580.8,106.2-879.6l-178.1-68.7L10305.9,10184.4z"></path>
	
	<g onClick={() => this.props.onClick(43)}>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[43].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M10297.6,10197c8.8,19.5,117.4,58,330.3,58  c4.2,0,13-9.7,17.2-14.4c39-135.5,43.6-222.7,156.3-406.4c21.8-48.2,34.8-159.6,4.2-198.5c-56.6-53.3-139.2-125.7-208.8-164.7  c-17.2-9.7-43.6-33.9-56.6-48.2c-17.2-24.1-69.6-29.2-100.2-4.6c-100.2,67.7-217.6,19.5-265.4,82.1c-43.6,63.1-26,169.3-8.8,261.2  C10184.4,9863,10258.2,10061.5,10297.6,10197z" style={{cursor: 'pointer'}}></path>
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[43].condition)} stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M9547.5,9532.2c26-38,189.7-155.4,257-155.4  c71,0,201.3,114.1,271.8,204.1c89.5,131.3-11.1,200.4-74.2,317.8c-18.6,34.8,0,166.1-48.2,217.6c-52,34.8-216.2,52-294.1-7  c-18.6-41.3-18.6-83-22.3-128C9632.8,9895,9461.6,9604.6,9547.5,9532.2L9547.5,9532.2z"></path>

	</g>
	<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9675.5,10068.9  c-88.6,122-38.5,1280.4,127.1,1255.3c23.2-4.2,158.2-25,173.5-345.1c11.6-202.3,53.8-737.1-23.2-888.8l-119.7-71.4L9675.5,10068.9z"></path>
	<path fill="#F2ECBE" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9098.4,10092.1  c-26.4,258.9-30.6,658.7,45.9,988.1c60.8,287.2,91.4,475,175.4,32.9c22.7-197.6,125.7-531.6,38-964.4l-103-141L9098.4,10092.1z"></path>
	
	
	<g onClick={() => this.props.onClick(42)}>
		<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[42].condition)}  stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8985.7,9554c0-53.8,45-140.6,90-154.9  c22.7-14.4,59.8,10.7,97.4,18.1c59.8,18.1,150.3,28.8,217.6,32.5c199,104.4,41.3,561.8-22.7,698.6c-3.7,3.7-7.4,10.7-11.1,14.4  c-26.4,18.1-225,7.4-251.4-50.6C9090.5,10119.5,9008,9748.8,8985.7,9554z" style={{cursor: 'pointer'}}></path>
	</g>

	<path id="iso-28" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14142.4,6773.9c-19-33.9-94.6-84.4-113.7-127.1  c-9.3-29.7-9.3-71.9,0-114.1c32.9-160.5,151.7-224.1,227.3-275.1c61.7-33.9,113.7-46.4,175.4-21.3  c75.6,29.7,189.3,131.3,237.1,131.3c42.7,0,85.4,4.2,128,8.4s71,12.5,99.3,29.7c38,16.7,71,59.4,99.3,93.2  c14.4,12.5,9.3,80.3-9.3,118.3c-28.3,63.6-80.7,105.8-90,122.5c-4.6,8.4,0,33.9,14.4,50.6c14.4,25.5,9.3,80.3-4.6,105.8  c-23.7,46.4-180,152.2-284.4,186c-57.1,25.5-151.7,33.9-194.4,8.4c-61.7-50.6-308-46.4-293.6-232.4  C14132.6,6833.2,14142.4,6795.2,14142.4,6773.9L14142.4,6773.9z" style={{cursor: 'pointer'}}></path>

	<path fill="#F2ECBE" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8379.8,10115.3  c-47.3,183.2,6,660.6,100.7,1080.4c47.3,227.8,231,178.6,219.4,31.1c-6-223.1-6-388.3,77-602.6c6-49.2,17.6-62.6,23.7-129.4  c12.1-111.8,12.1-209.7,12.1-326.1c-77-26.9-160-53.8-237.1-84.9C8510.2,10092.6,8445.2,10101.9,8379.8,10115.3L8379.8,10115.3z"></path>
	<g onClick={() => this.props.onClick(41)}> 
	<path style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[41].condition)} stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8302.8,9519.7c5.6-28.8,32.9-74.2,66.3-82.6  c143.3-53.8,375.3-41.3,508,4.2c44.1,24.6,66.3,45.5,66.3,70c-5.6,226.8-49.6,469.9-143.3,668c-154.5,103-353-4.2-403.1-53.8  C8324.6,9940.4,8307.9,9750.7,8302.8,9519.7L8302.8,9519.7z" style={{cursor: 'pointer'}}></path>
	</g>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14241.7,6731.6c-32.9-38-71-71.9-104.4-109.9  c-38-46.4,14.4-67.7,4.6-127.1c9.3-38,47.3-55.2,104.4-50.6c71-16.7,90,21.3,118.3,25.5c14.4,29.7,4.6,67.7,9.3,101.6  c0,71.9,71,55.2,113.7,55.2c104.4-25.5,32.9-88.6,85.4-122.5c-4.6-21.3,0-33.9,9.3-42.2c38-8.4,47.3-16.7,85.4-12.5  c19,4.2,57.1,12.5,61.7,29.7c0,50.6-4.6,97.4-4.6,148c19,16.7,57.1,25.5,61.7,46.4c4.6,20.9-14.4,55.2-23.7,80.3l-14.4,38  c-38-25.5-42.7-88.6-109-71.9c-23.7,4.2-38,21.3-61.7,25.5c-19,4.2-42.7-8.4-61.7-8.4c-28.3,0-61.7,8.4-90,12.5  c-28.3,8.4-47.3,29.7-61.7,55.2c-14.4,29.7-19,59.4-66.3,67.7c-23.7,0-42.7-4.2-47.3-38c9.3-25.5,9.3-33.9,28.3-46.4  C14289,6761.3,14279.7,6744.2,14241.7,6731.6L14241.7,6731.6z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14142.4,6773.9c47.3,0,99.3-25.5,99.3-38  c0-8.4-90-93.2-104.4-109.9c-19-25.5-19-55.2-4.6-71.9c14.4-12.5,14.4-42.2,9.3-59.4 M14246.3,6444c23.7-4.2,57.1-4.2,71,0  c4.6,0,14.4,12.5,28.3,21.3c14.4,8.4,28.3,0,32.9,16.7c4.6,33.9,4.6,76.1,0,114.1 M14606.3,6460.7c-9.3-4.2-32.9,4.2-38,12.5  c-4.6,4.2,14.4,25.5,0,38c-9.3,8.4-19,16.7-19,25.5c0,25.5,0,63.6-9.3,63.6c-14.4,0-28.3,33.9-109,21.3 M14734.3,6473.7  c-9.3,55.2-14.4,165.1,0,169.3c19,8.4,47.3,4.2,57.1,0c32.9-21.3,52-38,57.1-59.4 M14336.3,6731.6c32.9-29.7,66.3-46.4,99.3-50.6  c42.7,0,118.3,8.4,142,0c38-16.7,90-21.3,118.3-16.7 M14895.3,6740c-19-4.2-52,4.2-61.7,4.2c-9.3,0-38-21.3-47.3-21.3  c-9.3,0-23.7,76.1-28.3,76.1c-4.6,0-52-63.6-61.7-71.9c-9.3-8.4-42.7-4.2-61.7,0c-9.3,0-19,12.5-28.3,16.7c-9.3,4.2-28.3,4.2-47.3,0  c-14.4-4.2-42.7-4.2-61.7,0"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14578,6837.4c-9.3-4.2-23.7-38-28.3-55.2  c-4.6-12.5,0-29.7,4.6-38 M14289,6795.2c-14.4,0-23.7,21.3-28.3,46.4c0,8.4,19,33.9,23.7,33.9c14.4,0,38,4.2,42.7,0  c19-16.7,38-46.4,42.7-67.7"></path>
	<path id="iso-27" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13120,6679.7c-4.2-12.5-48.2-21.3-61.2-67.7  c-4.2-33.9-8.8-67.7,0-109.9c21.8-105.8,57.1-194.4,262.6-329.4c34.8-21.3,118.3-12.5,166.1,12.5  c253.8,130.8,262.6,130.8,415.7,367.4c21.8,46.4,26.4,295.5,4.2,341.9c-39.4,118.3-109.5,219.4-236.1,236.6  c-13,0-21.8,21.3-34.8,25.5c-26.4,12.5-78.9,21.3-96,8.4c-13-12.5-48.2-25.5-61.2-25.5c-13,4.2-26.4,12.5-39.4,12.5  c-43.6,16.7-113.7,8.4-144.3-12.5c-39.4-25.5-131.3-80.3-205.5-215.2c-13-33.9-17.6-92.8-13-139.2  C13080.5,6751.6,13098.2,6717.7,13120,6679.7L13120,6679.7z" style={{cursor: 'pointer'}}></path>
	
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13592.7,6701c8.8-12.5,0-25.5-4.2-38  c-4.2-4.2,39.4-38,57.1-33.9c26.4,0,4.2,118.3,26.4,130.8c17.6,12.5,30.6,25.5,30.6,42.2c-4.2,25.5-87.7,236.6-231.9,295.5"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13115.8,6675.5c17.6,12.5,83-8.4,91.9,12.5  c13,16.7,43.6,105.8,65.4,109.9c26.4-4.2,74.2-88.6,91.9-92.8c26.4-4.2,30.6-16.7,48.2-21.3c43.6-8.4,91.9-8.4,104.8-4.2  c17.6,12.5,21.8,33.9,17.6,54.7c4.2,16.7,39.4,0,57.1,12.5c21.8,21.3,43.6,54.7,61.2,63.6c17.6,8.4,65.4-8.4,91.9,16.7  c30.6,12.5,87.7-67.7,104.8-67.7c17.6-4.2,48.2,0,65.4-4.2 M13058.7,6612.4c0-58.9,43.6-118.3,57.1-114.1c8.8,4.2-13,67.7,0,92.8"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13299.5,6882.4c4.2-16.7,4.2-42.2,0-58.9  c-4.2-12.5-13-16.7-26.4-25.5 M13238.2,6485.8c17.6,50.6-4.2,92.8,0,122.5c4.2,21.3,65.4,80.3,126.6,97 M13395.5,6494.1  c26.4,12.5,52.4,21.3,52.4,38s34.8,80.3,30.6,101.1c-4.2,21.3-30.6,29.7-30.6,50.6 M13592.7,6502.5c-8.8,54.7-61.2,92.8-61.2,118.3  c4.2,21.3-13,42.2-8.8,58.9c21.8,16.7,21.8,38,17.6,54.7c-13,12.5-21.8,25.5-13,42.2c8.8,16.7,30.6,38,30.6,50.6  c0,12.5-13,29.7-21.8,33.9c-13,4.2-30.6,16.7-39.4,29.7 M13807,6798c-4.2-16.7-8.8-42.2-21.8-54.7c-8.8-8.4,0-29.7-4.2-46.4  c-4.2-8.4-21.8-8.4-26.4-21.3c4.2-16.7,17.6-25.5,34.8-33.9"></path>
	<path id="iso-26" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M12044.6,6771.5c-4.2-12.1-41.3-52.4-49.6-68.7  c-12.5-16.2-24.6-257.9,0-282.1c95.1-96.5,193.9-141,222.7-153.1c41.3-16.2,136.4-16.2,193.9-4.2c272.3,52.4,450,161,487.1,314.1  c12.5,56.6,8.4,177.2-4.2,270c-8.4,76.5-37.1,129-78.4,185.1c-28.8,44.1-74.2,88.6-107.2,100.7c-28.8,12.1-99.3,12.1-140.1,12.1  c-20.4-4.2-82.6-64.5-99.3-64.5c-12.5-4.2-65.9,19.9-99.3,32c-24.6,7.9-70,7.9-95.1,0c-41.3-7.9-107.2-40.4-156.8-92.8  c-53.8-60.3-86.7-145.2-86.7-169.3C12027.9,6836,12044.6,6787.8,12044.6,6771.5L12044.6,6771.5z" style={{cursor: 'pointer'}}></path>
	
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M12828.6,6804c-32.9,0-37.1-16.2-65.9-19.9  c-24.6-4.2-49.6,0-70,4.2c-12.5,4.2-24.6,24.1-37.1,24.1c-12.5-4.2-12.5-32-37.1-44.1c-16.7-7.9-24.6-32-41.3-32  c-16.7,0-53.8,24.1-70,24.1c-16.7-4.2-37.1-28.3-58-32c-16.7,0-45.5-12.1-58-12.1c-16.7,0-53.8,19.9-78.4,24.1  c-24.6,0-53.8-4.2-70,4.2c-16.7,4.2-28.8,19.9-41.3,19.9c-16.7,0-37.1,0-45.5-4.2 M12704.8,6522c24.6-16.2,53.8,24.1,58,36.2  c12.5,24.1-4.2,44.1-12.5,56.6c-32.9,40.4-65.9,120.6-82.6,120.6c-12.5,0-70-40.4-95.1-68.7"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M12618,6489.9c-28.8-16.2-78.4,4.2-82.6,12.1  c-4.2,7.9-28.8,32-32.9,52.4c-4.2,24.1,8.3,48.2,12.5,56.6c8.4,12.1,49.6,40.4,58,56.6c0,12.1-45.5,40.4-61.7,88.6  c0,19.9,28.8,19.9,24.6,36.2c-8.4,32-32.9,68.7-49.6,72.4c-20.4,7.9-45.5,60.3-82.6,60.3 M12296.1,6469.5  c41.3-28.3,86.7,36.2,103,72.4l24.6,60.3c20.4,48.2,0,80.7,24.6,120.6 M11982.5,6598.5c32.9,16.2,82.6,48.2,111.3,64.5  c16.7,7.9,16.7,68.7,78.4,100.7c-12.5,0-28.8,0-37.1,4.2c0,76.5-28.8,52.4-32.9,72.4c0,7.9-4.2,56.6,4.2,60.3  c8.4,4.2,16.7,7.9,28.8,4.2 M12127.2,6449.6c20.4,0,41.3,0,61.7,19.9c12.5,12.1,16.7,40.4,16.7,56.6c0,19.9,4.2,80.7-8.4,108.6   M12457,7085.6c49.6-28.3,123.9-100.7,173.5-177.2c8.4-16.2,16.7-36.2,20.4-52.4c0-16.2,0-32,4.2-44.1"></path>
	<path id="iso-24" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10617.2,6819.8c0-4.2-60.3-67.7-76.1-127.6  c-7.9-27.8-12.1-67.7,4.2-115.5c56.1-139.6,184.6-187.4,293.2-227.3c32-15.8,68.2-15.8,96.5,4.2c112.3,39.9,229.2,71.9,261.2,195.3  c16.2,47.8,16.2,103.4,7.9,147.5c-4.2,59.8-28.3,107.6-56.1,151.2c-12.1,15.8-7.9,59.8-16.2,87.7c-19.9,55.7-72.4,159.6-232.9,207.4  c-36.2,7.9-92.3,12.1-128.5,0c-19.9-7.9-124.3-32-168.9-151.2c-7.9-24.1-16.2-119.7-4.2-139.6  C10601,6836,10620.9,6836,10617.2,6819.8L10617.2,6819.8z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10617.2,6828.1c16.2-15.8,32-35.7,60.3-35.7  c19.9,0,52.4,47.8,76.5,47.8c19.9,0,32-35.7,60.3-47.8c0-4.2,80.3,7.9,116.4-12.1c16.2-4.2,36.2,12.1,48.2,7.9  c19.9-4.2,36.2-15.8,52.4-12.1c44.1,15.8,76.1,59.8,116.4,71.9"></path>
	
	
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10633,6605c36.2-4.2,68.2,67.7,80.3,83.5  c7.9,15.8,4.2,83.5-19.9,107.6 M10709.5,6565.1c-4.2-27.8,24.1-43.6,44.1-52c28.3-7.9,52.4-7.9,76.1,0c16.2,12.1,28.3,27.8,32,52  c4.2,43.6-12.1,87.7-19.9,87.7c-16.2,0-40.4-43.6-52.4-39.9c-12.1,4.2-7.9,135.5-4.2,147.5c4.2,12.1,19.9,19.9,24.1,32   M10986.5,6517.3c-7.9,0-28.3,7.9-28.3,15.8c-4.2,35.7,4.2,87.7,7.9,95.6c4.2,7.9,28.3,87.7,40.4,87.7s60.3-63.6,80.3-111.3  c4.2-12.1,16.2-12.1,24.1-7.9 M10902.5,6692.7c-4.2,19.9-4.2,52,0,63.6c4.2,4.2,24.1,19.9,40.4,27.8 M10946.6,6915.3  c12.1-4.2,28.3-19.9,36.2-39.9c12.1-32,4.2-55.7-4.2-79.8 M10745.7,6839.7c12.1,7.9,7.9,32,0,52c-12.1,7.9-16.2,24.1-16.2,27.8  c0,7.9,19.9,15.8,24.1,27.8"></path>
	<path id="iso-23" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9831.8,6651.4c-17.6,25.1-31.5,53.8-7,125.7  c66.3,172.6,195.3,312.7,289.5,334.5c31.5,14.4,69.6,14.4,97.9,0c108.1-50.6,181.4-147.5,244.5-255.1c20.9-50.6,20.9-97,3.7-129.4  c-45.5-97-157.3-190.7-226.8-219.4c-45.5-21.8-118.8-14.4-160.5,0C9978.4,6532.6,9866.6,6597.6,9831.8,6651.4L9831.8,6651.4z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10027.1,6727c-10.7,14.4-10.7,39.4-10.7,57.5  c3.7,18.1,13.9,36.2,24.6,46.9c20.9,21.8,20.9,50.6,20.9,79.3c10.7-3.7,20.9-3.7,31.5-7.4c13.9-7.4,24.6-14.4,38.5-18.1  c13.9,0,34.8,3.7,38.5,0c0-3.7,34.8,7.4,34.8,18.1c3.7,10.7,7,46.9,0,64.9c-3.7,18.1,10.7,18.1,38.5,3.7  c20.9-14.4,31.5-36.2,41.8-61.2c10.7-10.7,13.9-25.1,10.7-39.4c0-14.4,3.7-28.8,3.7-43.1c3.7-21.8,0-43.1-17.6-61.2  c-13.9-7.4-24.6-14.4-41.8-14.4c-10.7,3.7-20.9,10.7-27.8,21.8c-24.6,28.8-69.6,90-108.1,64.9c3.7-18.1,7-39.4,7-57.5  c0-21.8-10.7-32.5-24.6-43.1C10068.9,6727,10048,6727,10027.1,6727L10027.1,6727z"></path>
	
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9873.6,6694.5c-10.7,25.1,17.6,50.6,20.9,61.2  c20.9,82.6,104.8,143.8,115,147.5c13.9,7.4,59.4,10.7,84,0c7-3.7,17.6-14.4,24.6-18.1c13.9-7.4,59.4-7.4,73.3,0  c10.7,7.4,20.9,21.8,20.9,32.5c-3.7,21.8-10.7,57.5,0,61.2c17.6,3.7,31.5-10.7,45.5-25.1c13.9-14.4,20.9-46.9,31.5-53.8  c10.7-14.4,7-28.8,20.9-32.5c17.6-3.7,38.5-10.7,55.7-21.8c17.6-10.7,27.8-7.4,41.8,0"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10212.2,6770.1c3.7-14.4,17.6-21.8,34.8-21.8  c13.9,0,34.8,10.7,45.5,28.8c7,14.4,7,32.5,7,50.6c-3.7,25.1-7,50.6,0,61.2 M10041.1,6831.4c20.9,14.4,17.6,50.6,20.9,79.3h17.6  c7,32.5-7,100.7,3.7,111.3c0,3.7,7,10.7,13.9,10.7c3.7,3.7,3.7,10.7,0,18.1 M10027.1,6727c52.4-3.7,80.3,18.1,87.2,50.6  c0,25.1-13.9,57.5-3.7,71.9c7,10.7,20.9,21.8,24.6,36.2"></path>
	<path id="iso-22" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9126.2,6753.4  c33.9-66.3,127.6-176.3,204.1-207.4c25.5-22.3,144.7-26.4,170.3,0c55.2,26.4,170.3,132.2,204.1,202.7  c17.2,31.1,21.3,105.8,4.2,149.8c-29.7,92.8-110.4,172.1-195.8,233.8c-33.9,17.6-84.9,13.5-110.4,0c-25.5-8.8-187-136.9-259.3-242.6  c-8.4-8.8-12.5-17.6-17.2-22.3C9104.9,6841.6,9109.1,6775.2,9126.2,6753.4z" style={{cursor: 'pointer'}}></path>
	
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9134.6,6881c38,8.8,102.1,8.8,114.6,0  c12.5-4.6,21.3-44.1,38-44.1s46.9,61.7,63.6,66.3c8.4,8.8,84.9,8.8,106.2,4.6c33.9-4.6,55.2-48.7,84.9-44.1  c25.5,0,17.2,44.1,38,48.7c12.5,4.6,80.7-8.8,123.4,0 M9326.2,6995.6c0-35.3,8.4-75.2,33.9-92.8"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9500.1,7079.6c-17.2-31.1-55.2-52.9-55.2-70.5  c-4.2-13.5,12.5-79.3,12.5-101.6 M9611,7044.3c-33.9-8.8-33.9-101.6-59.4-110.4c-8.4-8.8,4.2-26.4,21.3-35.3"></path>
	<path id="iso-21" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8526.9,6602.7c18.6-10.7,37.1-21.3,58.9-28.8  c43.6-10.7,102.1-14.4,151.7-3.7c21.8,3.7,37.1,21.3,52.9,35.7c6,10.7,40.4,10.7,55.7,14.4c46.4,10.7,71.4,50.1,74.2,53.8  c12.5,14.4,24.6,28.8,31.1,53.8c12.5,50.1,9.3,107.2-9.3,167.9c-43.6,71.4-114.6,221.7-192.1,257.5c-15.3,10.7-92.8,3.7-92.8,3.7  c-71.4-50.1-427.7-282.5-294.6-436.5c12.5-28.8,62.2-96.5,105.3-103.9C8480.5,6613.3,8517.6,6609.6,8526.9,6602.7L8526.9,6602.7z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8362.7,6878.2c9.3-21.3,18.6-32,37.1-35.7  c40.4-3.7,83.5-3.7,99.3,10.7c18.6,21.3,33.9,10.7,46.4-7c18.6-10.7,40.4-10.7,62.2-3.7h58.9c9.3,7,15.3,14.4,24.6,21.3l15.3-18.1  c21.8,0,43.6-3.7,62.2-3.7c31.1-14.4,58.9-18.1,83.5-14.4c21.8,3.7,37.1,18.1,43.6,35.7c6,25.1,6,53.8,0,85.8  c-3.2,21.3-9.3,35.7-21.8,50.1c-24.6-3.7-40.4-18.1-52.9-46.4c-24.6-21.3-52.9-28.8-90-25.1c-15.3,14.4-31.1,21.3-49.6,18.1  c-33.9-35.7-27.8-53.8-71.4-46.4c-12.5,0-24.6,3.7-40.4,3.7c-6,3.7-24.6,25.1-46.4,10.7c-6-10.7-12.5-14.4-21.8-18.1  c-15.3-7-40.4,14.4-64.9,43.1c-6,7-9.3,7-15.3,14.4C8396.5,6924.6,8381.2,6906.5,8362.7,6878.2L8362.7,6878.2z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8545.4,6845.8c-9.3,7-21.8,21.3-33.9,18.1  c-9.3,0-15.3-18.1-27.8-21.3c-40.4,0-83.5-3.7-96,3.7c-9.3,7-21.8,21.3-31.1,35.7 M8607.6,6842h58.9c6,0,15.3,21.3,24.6,21.3  c6,0,15.3-21.3,21.8-21.3h58.9 M8852.1,6828.1c15.3,3.7,33.9,14.4,40.4,28.8c6,14.4,9.3,60.8,0,93.2c-3.2,21.3-6,32-21.8,50.1  c-18.6,10.7-43.6-18.1-52.9-46.4 M8567.2,6903.3c24.6-7,52.9-7,77.5,0c18.6,14.4,18.6,39.4,33.9,39.4c18.6,0,33.9-10.7,49.6-18.1"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8787.1,7121.3c-18.6-18.1-43.6-32-68.2-43.1  c-9.3-3.7-15.3-43.1-31.1-64.5c-6-18.1-12.5-46.4-9.3-68.2"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8412.3,6956.6c24.6-14.4,43.6-35.7,64.9-57.1  c12.5-7,31.1-10.7,43.6,14.4c3.2,39.4,12.5,71.4,21.8,100.2c9.3,43.1,64.9,100.2,96,125.3"></path>
	<path id="iso-25" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M11282,6835.1c0-9.3-8.3-31.5-12.1-49.6  c-16.2-72.4,0-149.4,0-226.4c16.2-45.5,110.4-167.5,208.3-180.9c85.8-22.7,126.6-4.6,138.7,0c24.6,9.3,65.4,4.6,85.8,13.5  c24.6,4.6,61.2,13.5,77.5,27.4c24.6,18.1,106.2,81.6,130.8,185.6c12.1,45.5,12.1,81.6,0,122c-12.1,40.8-36.6,77-61.2,90.5  c8.4,22.7,4.2,99.7,0,122c-12.1,58.9-40.8,113.2-61.2,140.1c-45,63.6-122.5,85.8-159.6,95.1c-49.2,13.5-118.3,9.3-151.2,4.6  c-110.4-36.2-204.1-140.1-212.5-190.2c-4.2-22.7-8.4-85.8,0-131.3C11269.5,6853.2,11277.8,6848.5,11282,6835.1L11282,6835.1z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M11384,6572.5c24.6-36.2,57.1-31.5,77.5-49.6  c32.5-31.5,53.3-22.7,77.5-18.1c36.6,31.5,49.2,103.9,77.5,108.6c45,0,65.4-54.3,97.9-49.6c36.6,13.5,61.2,22.7,85.8,40.8  c0,18.1-20.4,27.4-20.4,85.8c-4.2,36.2-20.4,40.8-36.6,58.9c4.2,9.3,20.4,22.7,24.6,36.2c4.2,27.4-16.2,72.4-45,54.3  c-20.4-13.5-36.6-27.4-57.1-40.8c-12.1-4.6-24.6-9.3-36.6,13.5c-36.6,22.7-69.6,9.3-102.1,0l-49.2-27.4  c-8.4,9.3-20.4,22.7-32.5,31.5c-12.1-4.6-32.5-9.3-49.2-13.5v-85.8c8.4-13.5,20.4-22.7,28.8-31.5c-12.1-9.3-28.8-18.1-40.8-27.4  C11372,6622.6,11379.9,6599.9,11384,6572.5L11384,6572.5z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M11282,6835.1c16.2-18.1,40.8-9.3,49.2-13.5  c20.4-13.5,36.6-22.7,61.2-22.7c16.2,0,36.6,18.1,53.3,18.1c16.7,0,16.2-31.5,32.5-31.5c20.4,0,32.5,27.4,49.2,27.4  c20.4,4.6,73.8,13.5,94.2,9.3c12.1,0,12.1-18.1,24.6-22.7c12.1-4.6,28.8,4.6,40.8-4.6c28.8-18.1,57.1-45.5,77.5-40.8  c16.2,0,61.2,63.6,90,67.7"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M11641.5,6961.7c12.1-13.5,16.2-36.2,16.2-58.9  c0-36.2-20.4-63.6-36.6-81.6 M11661.9,6798.9c28.8,13.5,49.2,31.5,69.6,54.3 M11653.6,6695c20.4,4.6,40.8,9.3,61.2,0  c8.4-4.6,0-36.2,8.4-40.8c4.2-4.6,16.2-9.3,16.2-18.1c0-13.5,0-49.6-4.2-54.3c-8.4-9.3-32.5-22.7-24.6-22.7  c4.2-4.6,85.8,27.4,90,40.8c4.2,18.1-20.4,31.5-20.4,49.6c0,31.5-4.2,63.6-16.2,72.4c-20.4,9.3-28.8,27.4-20.4,40.8 M11437.4,6735.8  c32.5,4.6,32.5,54.3,36.6,49.6c4.2-9.3,28.8,4.6,53.3,27.4c-12.1,18.1-28.8,31.5-45,45.5c-12.1,13.5-24.6,67.7-24.6,90.5   M11396.6,6803.5c-8.4-22.7-4.2-58.9,0-85.8c4.2-18.1,24.6-13.5,28.8-27.4c4.2-13.5-32.5-22.7-40.8-27.4c-12.1-13.5-8.4-58.9,0-90.5   M11531.1,6676.9c-20.4-13.5-53.3-63.6-57.1-85.8c12.1-40.8-16.2-58.9-12.1-67.7c0-9.3,16.2-18.1,24.6-22.7  c12.1-4.6,40.8-4.6,53.3,4.6c32.5,27.4,49.2,95.1,61.2,103.9c4.2,0,20.4,4.6,32.5,0"></path>
	<path id="iso-18" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2371.9,6767.8c0,21.3,9.3,59.4,9.3,84.4  c14.4,186-231.9,181.8-293.6,232.4c-42.7,25.5-137.3,16.7-194.4-8.4c-104.4-33.9-260.7-139.6-284.4-186  c-14.4-25.5-19-80.3-4.6-105.8c14.4-16.7,19-42.2,14.4-50.6c-9.3-16.7-61.7-59.4-90-122.5c-19-38-23.7-105.8-9.3-118.3  c28.3-33.9,61.7-76.1,99.3-93.2c28.3-16.7,57.1-25.5,99.3-29.7c42.7-4.2,85.4-8.4,128-8.4c47.3,0,161-101.6,237.1-131.3  c61.7-25.5,113.7-12.5,175.4,21.3c75.6,50.6,194.4,114.1,227.3,275.1c9.3,42.2,9.3,84.4,0,114.1  C2466.5,6683.4,2390.9,6734,2371.9,6767.8L2371.9,6767.8z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2272.6,6725.6c-38,12.5-47.3,29.7-38,55.2  c19,12.5,19,21.3,28.3,46.4c-4.6,33.9-23.7,38-47.3,38c-47.3-8.4-52-38-66.3-67.7c-14.4-25.5-32.9-46.4-61.7-55.2  c-28.3-4.2-61.7-12.5-90-12.5c-19,0-42.7,12.5-61.7,8.4c-23.7-4.2-38-21.3-61.7-25.5c-66.3-16.7-71,46.4-109,71.9l-14.4-38  c-9.3-25.5-28.3-59.4-23.7-80.3c4.6-21.3,42.7-29.7,61.7-46.4c0-50.6-4.6-97.4-4.6-148c4.6-16.7,42.7-25.5,61.7-29.7  c38-4.2,47.3,4.2,85.4,12.5c9.3,8.4,14.4,21.3,9.3,42.2c52,33.9-19,97.4,85.4,122.5c42.7,0,113.7,16.7,113.7-55.2  c4.6-33.9-4.6-71.9,9.3-101.6c28.3-4.2,47.3-42.2,118.3-25.5c57.1-4.2,94.6,12.5,104.4,50.6c-9.3,59.4,42.7,80.3,4.6,127.1  C2343.6,6653.7,2305.5,6687.6,2272.6,6725.6L2272.6,6725.6z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2371.9,6488.6c-4.6,16.7-4.6,46.4,9.3,59.4  c14.4,16.7,14.4,46.4-4.6,71.9c-14.4,16.7-104.4,101.6-104.4,109.9c0,12.5,52,38,99.3,38 M2135.3,6590.2c-4.6-38-4.6-80.3,0-114.1  c4.6-16.7,19-8.4,32.9-16.7c14.4-8.4,23.7-21.3,28.3-21.3c14.4-4.2,47.3-4.2,71,0 M2082.9,6615.7c-80.7,12.5-94.6-21.3-109-21.3  c-9.3,0-9.3-38-9.3-63.6c0-8.4-9.3-16.7-19-25.5c-14.4-12.5,4.6-33.9,0-38c-4.6-8.4-28.3-16.7-38-12.5 M1666.3,6577.6  c4.6,21.3,23.7,38,57.1,59.4c9.3,4.2,38,8.4,57.1,0c14.4-4.2,9.3-114.1,0-169.3 M1818,6657.9c28.3-4.2,80.7,0,118.3,16.7  c23.7,8.4,99.3,0,142,0c32.9,4.2,66.3,21.3,99.3,50.6 M2016.5,6738.1c-19-4.2-47.3-4.2-61.7,0c-19,4.2-38,4.2-47.3,0  s-19-16.7-28.3-16.7c-19-4.2-52-8.4-61.7,0c-9.7,8.4-57.1,71.9-61.7,71.9c-4.6,0-19-76.1-28.3-76.1s-38,21.3-47.3,21.3  c-9.3,0-42.7-8.4-61.7-4.2"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M1959.9,6738.1c4.6,8.4,9.3,25.5,4.6,38  c-4.6,16.7-19,50.6-28.3,55.2 M2144.6,6801.7c4.6,21.3,23.7,50.6,42.7,67.7c4.6,4.2,28.3,0,42.7,0c4.6,0,23.7-25.5,23.7-33.9  c-4.6-25.5-14.4-46.4-28.3-46.4"></path>
	<path id="iso-17" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3394.3,6673.7c21.8,38,39.4,71.9,43.6,105.8  c4.2,46.4,0,105.8-13,139.2c-74.2,135-166.1,190.2-205.5,215.2c-30.6,21.3-100.7,29.7-144.3,12.5c-13,0-26.4-8.4-39.4-12.5  c-13,0-48.2,12.5-61.2,25.5c-17.6,12.5-70,4.2-96-8.4c-13-4.2-21.8-25.5-34.8-25.5c-126.6-16.7-196.7-118.3-236.1-236.6  c-21.8-46.4-17.6-295.5,4.2-341.9c153.1-236.6,161.9-236.6,415.7-367.4c48.2-25.5,131.3-33.9,166.1-12.5  c205.5,135,240.8,223.6,262.6,329.4c8.8,42.2,4.2,76.1,0,109.9C3442.6,6652.8,3398.5,6661.1,3394.3,6673.7L3394.3,6673.7z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3044.1,7091.6  c-144.3-58.9-227.3-270-231.9-295.5c0-16.7,13-29.7,30.6-42.2c21.8-12.5,0-130.8,26.4-130.8c17.6-4.2,61.2,29.7,57.1,33.9  c-4.2,12.5-13,25.5-4.2,38"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2597.8,6749.7c17.6,4.2,48.2,0,65.4,4.2  c17.6,0,74.2,80.3,104.8,67.7c26.4-25.5,74.2-8.4,91.9-16.7c17.6-8.4,39.4-42.2,61.2-63.6c17.6-12.5,52.4,4.2,57.1-12.5  c-4.2-21.3,0-42.2,17.6-54.7c13-4.2,61.2-4.2,104.8,4.2c17.6,4.2,21.8,16.7,48.2,21.3c17.6,4.2,65.4,88.6,91.9,92.8  c21.8-4.2,52.4-92.8,65.4-109.9c8.8-21.3,74.2,0,91.9-12.5 M3398.5,6585c13-25.5-8.8-88.6,0-92.8c13-4.2,57.1,54.7,57.1,114.1"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3241.2,6791.9c-13,8.4-21.8,12.5-26.4,25.5  c-4.2,16.7-4.2,42.2,0,58.9 M3149.4,6699.2c61.2-16.7,122.5-76.1,126.6-97c4.2-29.7-17.6-71.9,0-122.5 M3066.3,6677.8  c0-21.3-26.4-29.7-30.6-50.6c-4.2-21.3,30.6-84.4,30.6-101.1s26.4-25.5,52.4-38 M3018.1,6884.7c-8.8-12.5-26.4-25.5-39.4-29.7  c-8.8-4.2-21.8-21.3-21.8-33.9c0-12.5,21.8-33.9,30.6-50.6c8.8-16.7,0-29.7-13-42.2c-4.2-16.7-4.2-38,17.6-54.7  c4.2-16.7-13-38-8.8-58.9c0-25.5-52.4-63.6-61.2-118.3 M2724.9,6635.6c17.6,8.4,30.6,16.7,34.8,33.9c-4.2,12.5-21.8,12.5-26.4,21.3  c-4.2,16.7,4.2,38-4.2,46.4c-13,12.5-17.6,38-21.8,54.7"></path>
	<path id="iso-16" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M4469.6,6765.5c0,16.2,16.7,64.5,12.5,80.7  c0,24.1-32.9,108.6-86.7,169.3c-49.6,52.4-115.5,84.4-156.8,92.8c-24.6,7.9-70,7.9-95.1,0c-32.9-12.1-86.7-36.2-99.3-32  c-16.7,0-78.4,60.3-99.3,64.5c-41.3,0-111.3,0-140.1-12.1c-32.9-12.1-78.4-56.6-107.2-100.7c-41.3-56.6-70-108.6-78.4-185.1  c-12.5-92.8-16.7-213.4-4.2-270c37.1-153.1,214.8-261.6,487.1-314.1c58-12.1,152.6-12.1,193.9,4.2c28.8,12.1,128,56.6,222.7,153.1  c24.6,24.1,12.5,265.8,0,282.1C4510.9,6713.1,4473.8,6753.4,4469.6,6765.5L4469.6,6765.5z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M4358.3,6753.4c-8.4,4.2-28.8,4.2-45.5,4.2  c-12.5,0-24.6-16.2-41.3-19.9c-16.7-7.9-45.5-4.2-70-4.2c-24.6-4.2-61.7-24.1-78.4-24.1c-12.5,0-41.3,12.1-58,12.1  c-20.4,4.2-41.3,28.3-58,32c-16.7,0-53.8-24.1-70-24.1c-16.7,0-24.6,24.1-41.3,32c-24.6,12.1-24.6,40.4-37.1,44.1  c-12.5,0-24.6-19.9-37.1-24.1c-20.4-4.2-45.5-7.9-70-4.2c-28.8,4.2-32.9,19.9-65.9,19.9 M3941.7,6661.1  c-24.6,28.3-82.6,68.7-95.1,68.7c-16.7,0-49.6-80.7-82.6-120.6c-8.4-12.1-24.6-32-12.5-56.6c4.2-12.1,32.9-52.4,58-36.2"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M4110.6,6918.6c-37.1,0-61.7-52.4-82.6-60.3  c-16.7-4.2-41.3-40.4-49.6-72.4c-4.2-16.2,24.6-16.2,24.6-36.2c-16.7-48.2-61.7-76.5-61.7-88.6c8.4-16.2,49.6-44.1,58-56.6  c4.2-7.9,16.7-32,12.5-56.6c-4.2-19.9-28.8-44.1-32.9-52.4c-4.2-7.9-53.8-28.3-82.6-12.1 M4065.1,6717.3  c24.6-40.4,4.2-72.4,24.6-120.6l24.6-60.3c16.7-36.2,61.7-100.7,103-72.4 M4378.7,6898.6c12.5,4.2,20.4,0,28.8-4.2  c8.4-4.2,4.2-52.4,4.2-60.3c-4.2-19.9-32.9,4.2-32.9-72.4c-8.4-4.2-24.6-4.2-37.1-4.2c61.7-32,61.7-92.8,78.4-100.7  c28.8-16.2,78.4-48.2,111.3-64.5 M4317,6628.7c-12.5-28.3-8.4-88.6-8.4-108.6c0-16.2,4.2-44.1,16.7-56.6  c20.4-19.9,41.3-19.9,61.7-19.9 M3859.1,6805.9c4.2,12.1,4.2,28.3,4.2,44.1c4.2,16.2,12.5,36.2,20.4,52.4  c49.6,76.5,123.9,148.9,173.5,177.2"></path>
	<path id="iso-14" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5897,6813.8c-4.2,15.8,16.2,15.8,19.9,32  c12.1,19.9,4.2,115.5-4.2,139.6c-44.1,119.7-148.4,143.3-168.9,151.2c-36.2,12.1-92.3,7.9-128.5,0  c-160.5-47.8-212.9-151.2-232.9-207.4c-7.9-27.8-4.2-71.9-16.2-87.7c-28.3-43.6-52.4-91.9-56.1-151.2c-7.9-43.6-7.9-99.7,7.9-147.5  c32-123.4,148.4-155.4,261.2-195.3c28.3-19.9,64.5-19.9,96.5-4.2c108.6,39.9,237.1,87.7,293.2,227.3c16.2,47.8,12.1,87.7,4.2,115.5  C5957.4,6746,5897,6810,5897,6813.8L5897,6813.8z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5366.8,6841.6c40.4-12.1,72.4-55.7,116.4-71.9  c16.2-4.2,32,7.9,52.4,12.1c12.1,4.2,32-12.1,48.2-7.9c36.2,19.9,116.4,7.9,116.4,12.1c28.3,12.1,40.4,47.8,60.3,47.8  c24.1,0,56.1-47.8,76.5-47.8c28.3,0,44.1,19.9,60.3,35.7"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5821,6790.1c-24.1-24.1-28.3-91.9-19.9-107.6  c12.1-15.8,44.1-87.7,80.3-83.5 M5704.5,6785.9c4.2-12.1,19.9-19.9,24.1-32c4.2-12.1,7.9-143.3-4.2-147.5  c-12.1-4.2-36.2,39.9-52.4,39.9c-7.9,0-24.1-43.6-19.9-87.7c4.2-24.1,16.2-39.9,32-52c24.1-7.9,48.2-7.9,76.5,0  c19.9,7.9,48.2,24.1,44.1,52 M5403,6590.6c7.9-4.2,19.9-4.2,24.1,7.9c19.9,47.8,68.2,111.3,80.3,111.3c12.1,0,36.2-79.8,40.4-87.7  c4.2-7.9,12.1-59.8,7.9-95.6c0-7.9-19.9-15.8-28.3-15.8 M5571.9,6778c16.2-7.9,36.2-24.1,40.4-27.8c4.2-12.1,4.2-43.6,0-63.6   M5535.7,6790.1c-7.9,24.1-16.2,47.8-4.2,79.8c7.9,19.9,24.1,35.7,36.2,39.9 M5760.7,6941.3c4.2-12.1,24.1-19.9,24.1-27.8  c0-4.2-4.2-19.9-16.2-27.8c-7.9-19.9-12.1-43.6,0-52"></path>
	<path id="iso-13" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6682.4,6645.4  c-34.8-53.8-146.6-118.8-240.8-143.8c-41.8-14.4-115-21.8-160.5,0c-69.6,28.8-181.4,122.5-226.8,219.4  c-17.6,32.5-17.6,79.3,3.7,129.4c62.6,108.1,135.9,205,244.5,255.1c27.8,14.4,66.3,14.4,97.9,0c94.2-21.8,223.1-161.9,289.5-334.5  C6714,6699.6,6700.1,6670.9,6682.4,6645.4L6682.4,6645.4z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6487.1,6721c-20.9,0-41.8,0-59.4,10.7  c-13.9,10.7-24.6,21.8-24.6,43.1c0,18.1,3.7,39.4,7,57.5c-38.5,25.1-84-36.2-108.1-64.9c-7-10.7-17.6-18.1-27.8-21.8  c-17.6,0-27.8,7.4-41.8,14.4c-17.6,18.1-20.9,39.4-17.6,61.2c0,14.4,3.7,28.8,3.7,43.1c-3.7,14.4,0,28.8,10.7,39.4  c10.7,25.1,20.9,46.9,41.8,61.2c27.8,14.4,41.8,14.4,38.5-3.7c-7-18.1-3.7-53.8,0-64.9c0-10.7,34.8-21.8,34.8-18.1  c3.7,3.7,24.6,0,38.5,0c13.9,3.7,24.6,10.7,38.5,18.1c10.7,3.7,20.9,3.7,31.5,7.4c0-28.8,0-57.5,20.9-79.3  c10.7-10.7,20.9-28.8,24.6-46.9C6497.8,6760.4,6497.8,6735.4,6487.1,6721L6487.1,6721z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6106.7,6839.7c13.9-7.4,24.6-10.7,41.8,0  c17.6,10.7,38.5,18.1,55.7,21.8c13.9,3.7,10.7,18.1,20.9,32.5c10.7,7.4,17.6,39.4,31.5,53.8s27.8,28.8,45.5,25.1  c10.7-3.7,3.7-39.4,0-61.2c0-10.7,10.7-25.1,20.9-32.5c13.9-7.4,59.4-7.4,73.3,0c7,3.7,17.6,14.4,24.6,18.1c24.6,10.7,69.6,7.4,84,0  c10.7-3.7,94.2-64.9,115-147.5c3.7-10.7,31.5-36.2,20.9-61.2"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6214.8,6882.9c7-10.7,3.7-36.2,0-61.2  c0-18.1,0-36.2,7-50.6c10.7-18.1,31.5-28.8,45.5-28.8c17.6,0,31.5,7.4,34.8,21.8 M6417.5,7044.8c-3.7-7.4-3.7-14.4,0-18.1  c7,0,13.9-7.4,13.9-10.7c10.7-10.7-3.7-79.3,3.7-111.3h17.6c3.7-28.8,0-64.9,20.9-79.3 M6379,6879.2c3.7-14.4,17.6-25.1,24.6-36.2  c10.7-14.4-3.7-46.9-3.7-71.9c7-32.5,34.8-53.8,87.2-50.6"></path>
	<path id="iso-12" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7388,6862c-4.2,4.6-8.4,13.5-17.2,22.3  c-72.4,105.8-233.8,233.8-259.3,242.6c-25.5,13.5-76.5,17.6-110.4,0c-84.9-61.7-165.6-141-195.8-233.8  c-17.2-44.1-12.5-119.2,4.2-149.8c33.9-70.5,148.9-176.3,204.1-202.7c25.5-26.4,144.7-22.3,170.3,0c76.5,31.1,170.3,141,204.1,207.4  C7405.2,6769.2,7409.4,6835.6,7388,6862z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="6596.6zM6810,6906.1c42.7-8.8,110.4,4.6,123.4,0  c21.3-4.6,12.5-48.7,38-48.7c29.7-4.6,51,39.9,84.9,44.1c21.3,4.6,97.9,4.6,106.2-4.6c17.2-4.6,46.9-66.3,63.6-66.3  s25.5,39.9,38,44.1c12.5,8.8,76.5,8.8,114.6,0 M7154.2,6897.3c25.5,17.6,33.9,57.5,33.9,92.8"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7056.3,6901.4c0,22.3,17.2,88.1,12.5,101.6  c0,17.6-38,39.9-55.2,70.5 M6941.7,6892.6c17.2,8.8,29.7,26.4,21.3,35.3c-25.5,8.8-25.5,101.6-59.4,110.4"></path>
	<path id="iso-11" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7987.4,6596.6c9.3,7,46.4,10.7,58.9,14.4  c43.6,7,92.8,75.2,105.3,103.9c133.1,154-223.1,386.4-294.6,436.5c0,0-77.5,7-92.8-3.7c-77.5-35.7-148.9-186-192.1-257.5  c-18.6-60.8-21.8-118.3-9.3-167.9c6-25.1,18.6-39.4,31.1-53.8c3.2-3.7,27.8-43.1,74.2-53.8c15.3-3.7,49.6-3.7,55.7-14.4  c15.3-14.4,31.1-32,52.9-35.7c49.6-10.7,108.6-7,151.7,3.7C7950.3,6575.3,7968.8,6586,7987.4,6596.6L7987.4,6596.6z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8151.6,6872.2c-18.6,28.8-33.9,46.4-58.9,75.2  c-6-7-9.3-7-15.3-14.4c-24.6-28.8-49.6-50.1-64.9-43.1c-9.3,3.7-15.3,7-21.8,18.1c-21.8,14.4-40.4-7-46.4-10.7  c-15.3,0-27.8-3.7-40.4-3.7c-43.6-7-37.1,10.7-71.4,46.4c-18.6,3.7-33.9-3.7-49.6-18.1c-37.1-3.7-64.9,3.7-90,25.1  c-12.5,28.8-27.8,43.1-52.9,46.4c-12.5-14.4-18.6-28.8-21.8-50.1c-6-32-6-60.8,0-85.8c6-18.1,21.8-32,43.6-35.7  c24.6-3.7,52.9,0,83.5,14.4c18.6,0,40.4,3.7,62.2,3.7l15.3,18.1c9.3-7,15.3-14.4,24.6-21.3h58.9c21.8-7,43.6-7,62.2,3.7  c12.5,18.1,27.8,28.8,46.4,7c15.3-14.4,58.9-14.4,99.3-10.7C8133,6839.7,8142.3,6850.4,8151.6,6872.2L8151.6,6872.2z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M8157.6,6875.4c-9.3-14.4-21.8-28.8-31.1-35.7  c-12.5-7-55.7-3.7-96-3.7c-12.5,3.7-18.6,21.3-27.8,21.3c-12.5,3.7-24.6-10.7-33.9-18.1 M7742.4,6836.5h58.9  c6,0,15.3,21.3,21.8,21.3c9.3,0,18.6-21.3,24.6-21.3h58.9 M7696,6947.4c-9.3,28.8-33.9,57.1-52.9,46.4  c-15.3-18.1-18.6-28.8-21.8-50.1c-9.3-32-6-78.9,0-93.2c6-14.4,24.6-25.1,40.4-28.8 M7786,6918.6c15.3,7,31.1,18.1,49.6,18.1  c15.3,0,15.3-25.1,33.9-39.4c24.6-7,52.9-7,77.5,0"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7835.7,6939.9c3.2,21.3-3.2,50.1-9.3,68.2  c-15.3,21.3-21.8,60.8-31.1,64.5c-24.6,10.7-49.6,25.1-68.2,43.1"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7876,7133.4c31.1-25.1,86.7-82.1,96-125.3  c9.3-28.8,18.6-60.8,21.8-100.2c12.5-25.1,31.1-21.3,43.6-14.4c21.8,21.3,40.4,43.1,64.9,57.1"></path>
	<path id="iso-15" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5232.3,6829.1c4.2,13.5,12.1,18.1,16.2,22.7  c8.4,45.5,4.2,108.6,0,131.3c-8.4,49.6-102.1,154-212.5,190.2c-32.5,4.6-102.1,9.3-151.2-4.6c-36.6-9.3-114.6-31.5-159.6-95.1  c-20.4-27.4-49.2-81.6-61.2-140.1c-4.2-22.7-8.4-99.7,0-122c-24.6-13.5-49.2-49.6-61.2-90.5c-12.1-40.8-12.1-77,0-122  c24.6-103.9,106.2-167.5,130.8-185.6c16.2-13.5,53.3-22.7,77.5-27.4c20.4-9.3,61.2-4.6,85.8-13.5c12.1-4.6,53.3-22.7,138.7,0  c97.9,13.5,192.1,135.9,208.3,180.9c0,77,16.2,154,0,226.4C5240.6,6797.5,5232.3,6820.2,5232.3,6829.1L5232.3,6829.1z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5130.2,6566.5c4.2,27.4,12.1,49.6,0,85.8  c-12.1,9.3-28.8,18.1-40.8,27.4c8.4,9.3,20.4,18.1,28.8,31.5v85.8c-16.2,4.6-36.6,9.3-49.2,13.5c-12.1-9.3-24.6-22.7-32.5-31.5  l-49.2,27.4c-32.5,9.3-65.4,22.7-102.1,0c-12.1-22.7-24.6-18.1-36.6-13.5c-20.4,13.5-36.6,27.4-57.1,40.8  c-28.8,18.1-49.2-27.4-45-54.3c4.2-13.5,20.4-27.4,24.6-36.2c-16.2-18.1-32.5-22.7-36.6-58.9c0-58.9-20.4-67.7-20.4-85.8  c24.6-18.1,49.2-27.4,85.8-40.8c32.5-4.6,53.3,49.6,97.9,49.6c28.8-4.6,40.8-77,77.5-108.6c24.6-4.6,45-13.5,77.5,18.1  C5073.2,6534.9,5105.6,6530.3,5130.2,6566.5L5130.2,6566.5z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M4660.3,6815.6c28.8-4.6,73.8-67.7,90-67.7  c20.4-4.6,49.2,22.7,77.5,40.8c12.1,9.3,28.8,0,40.8,4.6c12.1,4.6,12.1,22.7,24.6,22.7c20.4,4.6,73.8-4.6,94.2-9.3  c16.2,0,28.8-27.4,49.2-27.4c16.2,0,16.2,31.5,32.5,31.5s36.6-18.1,53.3-18.1c24.6,0,40.8,9.3,61.2,22.7c8.4,4.6,32.5-4.6,49.2,13.5  "></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M4893.2,6815.6c-16.2,18.1-36.6,45.5-36.6,81.6  c0,22.7,4.2,45.5,16.2,58.9 M4782.8,6847.2c20.4-22.7,40.8-40.8,69.6-54.3 M4770.7,6756.7c8.4-13.5,0-31.5-20.4-40.8  c-12.1-9.3-16.2-40.8-16.2-72.4c0-18.1-24.6-31.5-20.4-49.6c4.2-13.5,85.8-45.5,90-40.8c8.4,0-16.2,13.5-24.6,22.7  c-4.2,4.6-4.2,40.8-4.2,54.3c0,9.3,12.1,13.5,16.2,18.1c8.4,4.6,0,36.2,8.4,40.8c20.4,9.3,40.8,4.6,61.2,0 M5056.5,6942.3  c0-22.7-12.1-77-24.6-90.5c-16.2-13.5-32.5-27.4-45-45.5c24.6-22.7,49.2-36.2,53.3-27.4c4.2,4.6,4.2-45.5,36.6-49.6 M5130.2,6566.5  c8.4,31.5,12.1,77,0,90.5c-8.4,4.6-45,13.5-40.8,27.4c4.2,13.5,24.6,9.3,28.8,27.4c4.2,27.4,8.4,63.6,0,85.8 M4881.1,6603.1  c12.1,4.6,28.8,0,32.5,0c12.1-9.3,28.8-77,61.2-103.9c12.1-9.3,40.8-9.3,53.3-4.6c8.4,4.6,24.6,13.5,24.6,22.7  c4.2,9.3-24.6,27.4-12.1,67.7c-4.2,22.7-36.6,72.4-57.1,85.8"></path>
	<path id="iso-37" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13881.2,8542.2c13.5-24.6,26.9-39.4,31.5-64  c4.6-34.3,4.6-98.3-4.6-132.7c-8.8-39.4-40.4-83.5-81.2-108.1c-54.3-29.7-99.3-29.7-139.6-5.1c-13.5,5.1-18.1,24.6-26.9,29.7  c-22.7,0-26.9-34.3-54.3-39.4c-45-9.7-54.3-39.4-85.8-34.3c-26.9,0-54.3,24.6-63.1,34.3c-13.5,14.8-13.5,34.3-26.9,39.4  c-13.5,0-22.7-19.5-31.5-29.7c-8.8-14.8-45-39.4-76.5-39.4c-26.9-5.1-40.4,14.8-63.1,14.8c-18.1,0-112.7,0-130.8,14.8  c-31.5,19.5-67.7,49.2-85.8,122.9c-4.6,54.3-31.5,58.9-26.9,117.8c0,54.3,22.7,49.2,22.7,64s-58.5,39.4-76.5,108.1  c-13.5,54.3-8.8,128,0,162.4c8.8,34.3,31.5,83.5,54.3,117.8c36.2,54.3,81.2,98.3,117.4,122.9c31.5,14.8,76.5,19.5,108.1,29.7  c22.7,5.1,121.5,58.9,171.2,73.8c67.7,14.8,144.3,14.8,212,0c45-9.7,90,0,135.5-14.8c63.1-19.5,167-231,185.1-275.1  c18.1-54.3,13.5-132.7-4.6-162.4C13926.2,8665.2,13926.2,8586.3,13881.2,8542.2L13881.2,8542.2z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13155.2,8394.7c8.8,44.1,18.1,78.9,40.4,103.5  c26.9,44.1,67.7,54.3,103.9,64c36.2,5.1,58.5-9.7,90-29.7c31.5-5.1,58.5-9.7,90-14.8c63.1-9.7,108.1-9.7,144.3,0  c45,9.7,85.8,29.7,130.8,58.9c40.4,34.3,72.4,73.8,103.9,108.1c8.8,24.6,4.6,49.2-22.7,68.7c-18.1,14.8-49.6,14.8-67.7,9.7  c-26.9,9.7-67.7,5.1-94.6-5.1c-13.5,24.6-26.9,39.4-67.7,49.2c-26.9,5.1-49.6,0-63.1-9.7c-36.2-34.3-40.4-39.4-63.1-24.6  c-18.1,9.7-31.5,19.5-49.6,29.7c-36.2,5.1-67.7,0-94.6-9.7l-108.1-14.8c-8.8-5.1-18.1,0-26.9-5.1c-45-9.7-90-29.7-103.9-54.3  c-22.7-24.6-36.2-54.3-31.5-88.6c13.5-54.3,45-83.5,72.4-103.4C13123.7,8478.2,13128.3,8434.1,13155.2,8394.7L13155.2,8394.7z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13854.3,8689.8c-36.2-54.3-94.6-108.1-130.8-128  c-22.7-9.7-45-24.6-72.4-29.7c-94.6-29.7-130.8-19.5-193.9-5.1c-13.5,5.1-49.6,0-67.7,9.7c-31.5,9.7-36.2,29.7-63.1,29.7  c-22.7,0-40.4,0-58.5-14.8c-45-14.8-72.4-44.1-94.6-88.6c-8.8-19.5-8.8-64-18.1-68.7c-18.1,5.1-36.2,58.9-22.7,142.4  c0,14.8-40.4,24.6-67.7,78.9c-4.6,19.5-8.8,34.3-8.8,49.2s18.1,44.1,31.5,64"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13881.2,8542.2c-36.2-9.7-76.5-9.7-94.6-5.1  c-22.7,5.1-40.4,24.6-63.1,29.7 M13642.3,8625.7c13.5,14.8,26.9,34.3,31.5,58.9c4.6,24.6,0,54.3-4.6,78.9  c-8.8,14.8-22.7,34.3-36.2,39.4c-8.8,5.1-49.6,19.5-58.5,14.8c-8.8-5.1-45-19.5-58.5-39.4 M13763.8,8768.2  c-36.2,5.1-67.7,5.1-94.6-5.1 M13534.2,8640.6c-22.7,29.7-54.3,58.9-58.5,68.7c-4.6,19.5,8.8,64,4.6,73.8  c-8.8,9.7-49.6,34.3-72.4,39.4c-22.7,0-126.2-29.7-144.3-29.7c-22.7-5.1-58.5,5.1-67.7-9.7c-4.6-9.7,4.6-34.3,4.6-58.9  c0-19.5-8.8-58.9,4.6-64c26.9-9.7,13.5-88.6,63.1-108.1"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M13376,8620.6c0,24.6-26.9,49.2-36.2,64  c-22.7,34.3,4.6,93.2-18.1,122.9"></path>
	<path id="iso-38" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14046.4,8619.2c0-23.2-13.9-55.7-18.6-88.6  c-9.3-55.7-9.3-135,4.6-162.8c27.8-60.3,88.1-139.6,162.4-162.8c74.2-23.2,185.6-23.2,199.5-18.6c13.9,4.6,37.1,46.4,46.4,51  c18.6,0,37.1-32.5,55.7-37.1c55.7-23.2,176.3-18.6,204.1-9.3c106.7,51,208.8,153.6,241.2,213.9c13.9,51,9.3,158.2-9.3,172.1  c27.8,27.8,88.1,130.4,97.4,167.5c4.6,32.5,4.6,93.2-4.6,121.1c-78.9,176.7-162.4,213.9-260.2,260.2c-60.3,13.9-162.4,9.3-199.5-4.6  c-74.2-18.6-264.9-32.5-376.2-93.2c-92.8-64.9-162.4-199.9-185.6-344.2C14000,8661,14037.1,8642.4,14046.4,8619.2L14046.4,8619.2z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14241.7,8623.9c-23.2-37.1-4.6-111.8,32.5-116.4  c32.5-9.3,69.6-4.6,88.1,0c18.6-18.6,41.8-32.5,88.1-32.5c32.5,13.9,60.3,32.5,92.8,46.4c37.1,4.6,69.6-4.6,106.7,9.3  c32.5,13.9,46.4,46.4,74.2,55.7c27.8,9.3,51,18.6,78.9,27.8c13.9,23.2,51,37.1,69.6,78.9c4.6,13.9,13.9,27.8,18.6,46.4  c-23.2,18.6-60.3,51-78.9,69.6c-18.6,27.8-41.8,46.4-69.6,51c-41.8,0-88.1,4.6-129.9,4.6c-32.5-4.6-60.3-9.3-64.9-23.2  c-13.9-18.6-13.9-74.2-46.4-97.9c-23.2-9.3-18.6-13.9-41.8-23.2c-18.6-13.9-37.1-18.6-60.3-18.6c-32.5-13.9-55.7,18.6-78.9,55.7  c-27.8,41.8-51,60.3-64.9,60.3c-27.8,4.6-41.8-4.6-51-74.2c-9.3-13.9-13.9-27.8-23.2-41.8c4.6-27.8,13.9-46.4,27.8-64.9  C14213.8,8623.9,14232.4,8633.2,14241.7,8623.9L14241.7,8623.9z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14794.2,8814.5c13.9-23.2,78.9-60.3,83.5-74.2  c0-9.3-32.5-74.2-51-83.5c-13.9-9.3-32.5-23.2-37.1-41.8 M14533.9,8842.4c0,9.3,18.6,18.6,37.1,23.2c55.7,0,111.3,0,162.4-4.6"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14933.3,8577c-46.4-18.6-78.9,37.1-129.9,41.8  c-32.5-9.3-74.2-27.8-116-41.8c-18.6-9.3-46.4-4.6-64.9,9.3s-60.3,9.3-92.8,13.9c23.2,51,4.6,144.3-13.9,153.5  c-9.3,4.6-74.2-37.1-92.8-46.4c-13.9-4.6-51-4.6-64.9,0c-13.9,4.6-83.5,102.5-97.4,111.8c-9.3,4.6-23.2,4.6-37.1,0 M14046.4,8619.2  c37.1-32.5,88.1-64.9,106.7-64.9c23.2,0,32.5,41.8,51,46.4c13.9,0,37.1,13.9,37.1,18.6s-32.5,9.3-41.8,13.9  c-9.3,9.3-27.8,46.4-27.8,64.9c0,13.9,18.6,27.8,23.2,41.8 M14747.8,8423.9c-23.2,37.1-78.9,64.9-97.4,74.2  c-18.6,9.3-83.5,23.2-106.7,23.2c-27.8-4.6-51-27.8-83.5-46.4c-18.6,0-32.5-4.6-46.4,0c-9.3,4.6-51,27.8-51,32.5  c0,13.9,83.5,18.6,167,88.1"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14306.6,8377.1c27.8,37.1,69.6,83.5,111.3,93.2  c18.6,0,46.4-4.6,60.3-4.6c60.3-13.9,106.7-41.8,153.1-74.2"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M14441.1,8237.5c-4.6,18.6-9.3,41.8,0,64.9  c9.3,18.6,27.8,27.8,37.1,55.7c4.6,27.8,9.3,60.3,0,74.2c-9.3,13.9-27.8,32.5-51,41.8 M14715.3,8307.5l78.9-64.9"></path>
	<path id="iso-36" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M12811.5,8554.8c-9.7-25.1,14.8-139.6,0-174.9  c-63.6-95.1-196.2-184.6-314.1-180c-24.6,0-73.8,39.9-93.2,39.9c-19.5,0-58.9-30.2-78.4-39.9c-44.1-14.8-156.8-14.8-186.5-5.1  c-49.2,19.9-156.8,95.1-206,184.6c-19.5,25.1-34.3,115-34.3,160c0,25.1-39.4,90-39.4,115c-9.7,30.2-14.8,99.7-5.1,135  c14.8,34.8,83.5,79.8,122.5,109.9c19.5,14.8,53.8,70,73.8,99.7c103,109.9,191.1,79.8,215.7,90c44.1,19.9,103,45,196.2,39.9  c88.1,5.1,112.7-25.1,132.7-25.1c58.9-25.1,127.6-25.1,152.2-34.8c83.5-30.2,112.7-119.7,122.5-135c34.3-50.1,34.3-209.7,24.6-249.6  C12889.9,8654.5,12821.2,8584.9,12811.5,8554.8L12811.5,8554.8z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M12060.9,8579.8c-19.5,30.2-24.6,64.9-34.3,95.1  c9.7,10.2,19.5,19.9,34.3,30.2c0,14.8-5.1,30.2-5.1,45c0,5.1,0,14.8,5.1,19.9h53.8v25.1h73.8c24.6-5.1,49.2-5.1,73.8-10.2  c5.1-5.1,19.5-5.1,34.3-5.1c19.5,0,39.4,0,53.8,5.1c34.3,14.8,68.7,34.8,103,50.1c9.7,0,19.5,5.1,29.2,5.1  c9.7-5.1,19.5-10.2,24.6-14.8c19.5-5.1,39.4-5.1,63.6-10.2c44.1-50.1,29.2-90,5.1-149.8c-9.7-14.8-24.6-30.2-49.2-34.8  c0-30.2,0-59.8-14.8-84.9c-14.8-14.8-39.4-14.8-73.8-14.8c0-10.2,0-25,5.1-34.8c-9.7,5.1-24.6,5.1-34.3,10.2l-88.1-14.8  c-29.2,14.8-53.8,25.1-83.5,39.9c-19.5,0-39.4-5.1-58.9-5.1C12158.8,8529.7,12109.6,8524.6,12060.9,8579.8L12060.9,8579.8z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M12026.5,8674.4c0,19.9,29.2,19.9,34.3,30.2  c0,25.1-9.7,59.8,0,64.9c14.8,5.1,44.1-5.1,53.8,0c5.1,10.2-9.7,19.9,0,25.1c19.5,5.1,108.1,0,142.4-10.2 M11899,8504.7  c14.8,14.8,24.6,45,39.4,50.1c24.6,0,14.8-64.9,19.5-70c9.7-5.1,29.2,5.1,39.4,0c9.7-5.1,0-19.9,5.1-25.1c9.7-5.1,88.1-5.1,103-5.1  c9.7,0,19.5,19.9,14.8,34.8 M12178.2,8654.5c-14.8-45-19.5-115-5.1-124.8c19.5-14.8,53.8,5.1,68.7,0c19.5-10.2,44.1-30.2,78.4-39.9  c39.4-5.1,58.9,34.8,122.5,5.1c0,19.9-9.7,34.8-9.7,50.1c-5.1,19.9-9.7,39.9-19.5,54.7c-19.5,14.8-39.4,45-49.2,70  c-9.7,30.2-44.1,64.9-83.5,79.8"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M12266.8,8334.9c-5.1,25.1-5.1,59.8,0,64.9  c9.7,5.1,14.8,5.1,19.5,10.2c14.8,10.2-5.1,45,9.7,54.7l24.6,25.1 M12531.7,8354.8c-5.1,14.8-19.5,30.2-29.2,34.8  c-9.7,0-9.7,34.8-19.5,54.7c-5.1,10.2-19.5,14.8-24.6,19.9c-9.7,10.2-14.8,25-14.8,34.8 M12438.5,8529.7c19.5-5.1,39.4-5.1,58.9,5.1  c19.5,5.1,29.2,34.8,24.6,45c0,14.8-5.1,39.9,0,50.1s24.6,10.2,34.3,14.8c9.7,5.1,14.8,25.1,19.5,39.9 M12693.6,8455  c-24.6,14.8-29.2,45-58.9,45c-19.5,0-44.1,19.9-39.4,30.2c5.1,14.8,19.5,0,39.4,14.8c14.8,14.8,24.6,30.2,34.3,39.9  c19.5,14.8,19.5,54.7,39.4,64.9c14.8,10.2,0,34.8,9.7,50.1c9.7,10.2,19.5,10.2,24.6,19.9c5.1,10.2,0,75.2-5.1,90  c-5.1,10.2-29.2,14.8-24.6,25.1 M12413.9,8599.8c14.8,19.9,9.7,75.2,39.4,90c24.6,19.9,14.8,39.9,68.7,95.1  c14.8,5.1,49.2,19.9,49.2,34.8c0,10.2-29.2,0-49.2,5.1c-19.5,5.1-24.6,19.9-39.4,19.9c-9.7,0-39.4-10.2-53.8-19.9  c-24.6-14.8-49.2-34.8-73.8-39.9"></path>
	<path id="iso-35" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M11057.5,8516.7c-4.6-34.8,0-70,4.6-100.7  c9.3-30.6,42.7-83,85.4-96c66.3-17.6,128-8.8,161.4,0c23.7,8.8,52,39.4,71,39.4s42.7-21.8,71-34.8c19-8.8,90-8.8,109,0  c57.1,17.6,128,83,161.4,126.6c14.4,17.6,38,70,47.3,109.5c14.4,56.6,9.3,214.3-14.4,266.7c-38,78.9-194.4,144.3-246.8,166.1  c-57.1,26.4-170.7,21.8-208.8,13c-85.4-17.6-213.4-104.8-246.8-153.1c-28.3-39.4-4.6-83-14.4-100.7c-9.3-13-23.7-30.6-33.4-43.6  c-19-52.4-14.4-104.8,0-126.6C11024.5,8556.2,11052.8,8538.5,11057.5,8516.7z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M11247.2,8481.9c33.4,13,61.7,8.8,80.7-8.8  c4.6-21.8,4.6-43.6,9.3-65.4c0-4.2,4.6-8.8,9.3-13c4.6,8.8,9.3,13,9.3,21.8c4.6,17.6,9.3,34.8,14.4,48.2c0,13,9.3,17.6,19,13  c23.7,8.8,38,0,47.3-13c9.3-8.8,9.3-4.2,19-13c57.1-4.2-19,43.6,9.3,56.6c19,4.2,38,8.8,61.7,13c23.7,4.2,42.7,8.8,66.3,4.2  c23.7-13,52-17.6,71-17.6c0,13,0,26.4-4.6,34.8c-4.6,34.8-23.7,43.6-47.3,52.4c19,17.6,33.4,34.8,38,56.6c4.6,26.4,4.6,48.2,0,74.2  c-9.3,26.4-23.7,43.6-42.7,48.2c-28.3,8.8-52,26.4-99.7,30.6c-47.3,0-85.4-39.4-109-21.8c-23.7,34.8-47.3,52.4-66.3,43.6  c-19-4.2-28.3-13-28.3-30.6s-9.3-26.4-42.7-30.6c-14.4-4.2-23.7-8.8-38-8.8c-4.6-13-14.4-30.6-19-43.6c0-26.4,23.7-39.4,47.3-43.6  c0-30.6-71-48.2-61.7-83c-28.3-30.6-38-70-4.6-131.3c9.3-4.2,19-13,28.3-17.6C11233.3,8451.3,11242.6,8464.3,11247.2,8481.9  L11247.2,8481.9z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M11247.2,8481.9c0-17.6-23.7-39.4-38-43.6  c-9.3-4.2-33.4,30.6-52,39.4c-33.4,21.8-66.3,17.6-94.6,39.4 M11038.4,8752.8c33.4-21.8,71-61.2,104.4-96c19-13,33.4-65.4,42.7-70  c14.4-8.8,52,17.6,76.1,26.4c19,4.2,47.3,0,71-13c23.7-8.8,57.1-26.4,71-26.4c14.4,0,33.4,34.8,52,43.6c14.4,4.2,76.1-8.8,109-8.8  c28.3,0,66.3-17.6,76.1-26.4c14.4-13,19-56.6,19-70c-4.6-8.8-61.7,17.6-90,17.6c-28.3,0-76.1-13-113.7-21.8 M11593.7,8783.5  c38,0,52-48.2,57.1-70c4.6-21.8,4.6-43.6-4.6-65.4c-9.3-21.8-14.4-30.6-33.4-48.2"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M11522.3,8722.2c4.6-8.8,0-26.4-4.6-39.4  c-4.6-17.6-52-61.2-61.7-61.2c-4.6,0-33.4,39.4-38,70 M11247.2,8674c-14.4,0-47.3,21.8-47.3,34.8c0,13,19,52.4,28.3,56.6  c9.3,4.2,61.7,4.2,66.3,13c9.3,8.8,14.4,34.8,19,43.6c4.6,4.2,28.3,13,38,8.8c9.7-4.2,33.4-43.6,52-48.2 M11327.9,8473.1  c0-26.4,9.3-74.2,19-78.9c9.3,4.2,23.7,83,28.3,83c9.3,4.2,38,4.2,42.7,0c9.3,0,23.7-21.8,38-26.4"></path>
	<path id="iso-34" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10289.7,8590.5  c34.8-64.5,77.5-146.6,108.6-176.7c26.9-26,97-73.3,151.2-99.3c62.2-30.2,104.8-34.3,159.1-4.2c34.8,17.2,81.2,47.3,104.8,82.1  c23.2,26,93.2,163.8,100.7,202.7c11.6,77.5-11.6,125.3-19.5,159.6c-39,133.6-166.5,232.9-217.1,258.9  c-34.8,17.2-100.7,21.3-131.7,4.2c-120.1-69.1-205.5-142.4-267.7-306.2C10262.8,8668,10274.4,8620.6,10289.7,8590.5L10289.7,8590.5z  " style={{cursor: 'pointer'}}></path>

	<g>
					<text fill='#333333' x='14600' y='11700' style={{fontSize: 250}}>17</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10402,8646.6c3.7-26,11.6-43.1,23.2-52  c26.9-8.8,46.4-8.8,73.8-34.3c19.5-34.3-7.9-77.5,19.5-73.3c26.9,26,39,56.1,50.6,90.5c-3.7,69.1-19.5,103.5-39,133.6  c-23.2,17.2-42.7,17.2-69.6,8.8c-15.3-4.2-31.1-8.8-50.6-13C10394.5,8706.9,10394.5,8685.6,10402,8646.6z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10609.3,8659.6c3.7-26,7.9-52,7.9-77.5  c-7.9-82.1,3.7-95.1,15.3-107.6c11.6-8.8,19.5-21.3,31.1-30.2c34.8-17.2,23.2,69.1,39,86.3c50.6,30.2,69.6,77.5,77.5,133.6  c-3.7,47.3-26.9,56.1-62.2,43.1c-26.9,4.2-58,13-93.2,26C10620.9,8711.1,10613,8685.6,10609.3,8659.6L10609.3,8659.6z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M10518.4,8487c19.5,17.2,39,47.3,50.6,90.5  c3.7,34.3-11.6,112.3-39,133.6 M10425.2,8594.7c-7.9,8.8-19.5,30.2-23.2,52c0,13-7.9,39-3.7,52c3.7,8.8,39,21.3,62.2,21.3   M10700.7,8443.9c-23.2,17.2-42.7,43.1-50.6,69.1c-3.7,21.3,11.6,77.5,0,103.5c-11.6,21.3,0,112.3,11.6,116.4s54.3-34.3,93.2-26   M10739.2,8530.2c58,34.3,69.6,82.1,77.5,138.2"></path>
	</g>
	<g>
					<text fill='#333333' x='13500' y='11700' style={{fontSize: 250}}>18</text>
	<path id="iso-33" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9611.5,8573.8  c16.2-25.5,153.6-178.6,225.9-238.4c40.4-25.5,97-17.2,129.4,0c64.5,38.5,109,68.2,153.5,127.6c28.3,33.9,60.8,97.9,72.8,148.9  c24.1,59.4,16.2,123.4,4.2,178.6c-20.4,59.4-88.6,199.9-133.1,217.1c-36.2,13-169.8,8.4-201.8,0c-16.2-4.2-104.8-80.7-137.3-110.4  c-44.5-51-80.7-115-116.9-178.6C9591.5,8684.7,9587.4,8620.6,9611.5,8573.8L9611.5,8573.8z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9724.7,8608.1c4.2-25.5,16.2-33.9,28.3-42.7  c28.3-8.3,28.3-21.3,56.6-42.7c16.2-97.9,7.9-89.5,84.9-144.7c28.3,25.5,7.9,144.7,7.9,182.8c7.9,119.2-24.1,148.9-56.6,144.7  c-24.1,17.2-76.5-13-104.8-25.5C9728.9,8659.1,9712.6,8646.2,9724.7,8608.1L9724.7,8608.1z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9978.9,8522.8c-16.2,17.2,7.9,46.9,12.1,55.2  c7.9,17.2,16.2,46.9,4.2,64c-7.9,8.4-28.3,0-28.3,17.2c0,21.3,4.2,33.9,7.9,42.7c28.3,13,64.5,21.3,92.8-4.2  c16.2-17.2,12.1-33.9,20.4-46.9c12.1-25.5,36.2-13,44.5-42.7c-4.2-29.7-16.2-46.9-36.2-76.5c-4.2-4.2-7.9-17.2-20.4-25.5  C10068,8488.9,9999.3,8488.9,9978.9,8522.8L9978.9,8522.8z"></path>
	</g>
	<g>
					<text fill='#333333' x='12100' y='11700' style={{fontSize: 250}}>19</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9805.4,8522.8c12.1-21.3,4.2-68.2,20.4-84.9  c12.1-17.2,52.4-59.4,64.5-59.4c20.4,4.2,4.2,174.4,7.9,264 M10007.2,8501.9c24.1-4.2,60.8-4.2,68.7,0c7.9,4.2,36.2,46.9,40.4,55.2  c4.2,13,20.4,42.7,16.2,51c-4.2,8.4-16.2,13-24.1,17.2c-7.9,4.2-16.2,13-20.4,21.3 M9995.1,8573.8c4.2,21.3,4.2,55.2,0,68.2  c-7.9,8.4-20.4,0-24.1,8.4c-4.2,4.2,0,38.5,4.2,46.9c4.2,8.4,20.4,8.4,32.5,8.4 M9724.7,8612.3c0,13-4.2,38.5,4.2,51  c12.1,21.3,44.5,33.9,52.4,38.5c12.1,4.2,40.4,4.2,60.8,4.2"></path>
	<path id="iso-32" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9136.9,8336.3c-26.9,14.4-71.9,72.4-81.2,106.2  c-9.3,33.9-18.1,58-31.5,82.1c-13.5,19.5-71.9,67.3-85.4,91.4c-13.5,24.1-40.4,125.3-13.5,207.4c13.5,48.2,90,129.9,130.4,149.4  c40.4,19.5,184.2,24.1,260.7,9.7c53.8-24.1,148.4-82.1,206.9-207.4c18.1-48.2,26.9-106.2-4.6-149.4  c-81.2-110.9-175.4-212-265.4-298.8C9226.9,8312.1,9177.7,8307.5,9136.9,8336.3z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9150.4,8413.3c13.5-24.1,36.2-33.9,49.6-33.9  c31.5,0,45,28.8,45,72.4c0,9.7,0,24.1,4.6,33.9c26.9,4.6,36.2,19.5,22.3,52.9c26.9,9.7,53.8,14.4,81.2,9.7  c18.1,0,36.2,28.8,53.8,52.9c26.9,33.9,22.3,72.4,18.1,110.9c-8.8,14.4-8.8,28.8-49.6,28.8c-22.3-14.4-26.9-28.8-31.5-33.9  c-26.9,0-53.8-4.6-81.2-4.6c-18.1-4.6-31.5-9.7-45-14.4c-22.3-4.6-45-9.7-63.1-9.7c-45,9.7-116.9,86.7-139.6,9.7v-28.8  c0-38.5,18.1-52.9,40.4-67.3c0-19.5,4.6-33.9,4.6-52.9c18.1-14.4,31.5-24.1,49.6-38.5c0-14.4,0-24.1,4.6-38.5  C9128.1,8447.1,9136.9,8427.7,9150.4,8413.3L9150.4,8413.3z"></path>
	</g>
	<g>
					<text fill='#333333' x='11100' y='11700' style={{fontSize: 250}}>20</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M9155,8418.4c-18.1,9.7-31.5,24.1-45,48.2  c-4.6,9.7,4.6,24.1,0,38.5c-4.6,9.7-40.4,24.1-49.6,33.9c-4.6,9.7,0,33.9-4.6,52.9c-4.6,14.4-31.5,19.5-36.2,33.9  c-4.6,14.4-4.6,43.1-4.6,62.6 M9200,8384.5c22.3-9.7,31.5,0,45,33.9c8.8,19.5-4.6,52.9,4.6,67.3c8.8,9.7,22.3,4.6,26.9,14.4  c4.6,9.7-8.8,33.9,0,38.5c13.5,19.5,94.6,0,98.8,24.1c4.6,24.1,40.4,43.1,49.6,62.6s4.6,58,4.6,91.4 M9136.9,8678.6  c26.9-4.6,76.5,0,94.6,14.4c22.3,19.5,81.2,4.6,112.3,14.4"></path>
	<path id="iso-31" fill="#FAFAFAFAFAFA" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8286.6,8567.8c38.5-104.8,120.6-244,159.6-274.2  c53.3-39.9,106.2-34.8,145.2-19.9c62.6,29.7,207.8,189.3,261.2,298.8c14.4,34.8,14.4,129.4,9.7,209.2  c-14.4,54.7-43.6,99.7-77.5,124.8c-38.5,19.9-87.2,25.1-149.8,45c-53.3,19.9-174,19.9-222.2-5.1c-77.5-39.9-111.3-139.6-125.7-194.4  C8281.5,8697.6,8272.2,8627.6,8286.6,8567.8z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8523.2,8343.7c33.9,0,58,19.9,62.6,45  c9.7,19.9,19.5,49.6,29.2,69.6l72.4,59.8c33.9,25.1,62.6,49.6,77.5,89.5c9.7,25.1-4.6,34.8-29.2,34.8h-33.9  c-24.1-9.7-53.3-5.1-96.5,0c-43.6,5.1-87.2,0-130.4-5.1h-62.6c-24.1-5.1-48.2,0-53.3-29.7c0-34.8,9.7-64.9,29.2-99.7  c19.5-29.7,38.5-64.9,58-94.6C8465.2,8383.6,8489.3,8353.4,8523.2,8343.7L8523.2,8343.7z"></path>
	</g>
	<g>
					<text fill='#333333' x='10300' y='11700' style={{fontSize: 250}}>21</text>
	<path fill="#FAFAFAFAFAFA" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8518.5,8348.8c-19.5,0-43.6,14.8-58,39.9  c-24.1,39.9-62.6,104.8-72.4,124.8c-14.4,19.9-29.2,64.9-24.1,99.7 M8576.5,8393.3c19.5,14.8,29.2,54.7,38.5,64.9  c19.5,25.1,101.6,69.6,135.5,124.8c9.7,9.7,19.5,34.8,9.7,49.6c-14.4,9.7-38.5,9.7-58,5.1 M8412.3,8627.6  c67.7,5.1,130.4,19.9,193.4,9.7"></path>
	<path id="iso-47" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2621.5,8527.4c-45,44.1-45,122.9-58.5,147.5  c-18.1,29.7-22.7,108.1-4.6,162.4c18.1,44.1,121.5,255.6,185.1,275.1c45,14.8,90,5.1,135.5,14.8c67.7,14.8,144.3,14.8,212,0  c49.6-14.8,148.9-68.7,171.2-73.8c31.5-9.7,76.5-14.8,108.1-29.7c36.2-24.6,81.2-68.7,117.4-122.9c22.7-34.3,45-83.5,54.3-117.8  c8.8-34.3,13.5-108.1,0-162.4c-18.1-68.7-76.5-93.2-76.5-108.1s22.7-9.7,22.7-64c4.6-58.9-22.7-64-26.9-117.8  c-18.1-73.8-54.3-103.5-85.8-122.9c-18.1-14.8-112.7-14.8-130.8-14.8c-22.7,0-36.2-19.5-63.1-14.8c-31.5,0-67.7,24.6-76.5,39.4  c-8.8,9.7-18.1,29.7-31.5,29.7c-13.5-5.1-13.5-24.6-26.9-39.4c-8.8-9.7-36.2-34.3-63.1-34.3c-31.5-5.1-40.4,24.6-85.8,34.3  c-26.9,5.1-31.5,39.4-54.3,39.4c-8.8-5.1-13.5-24.6-26.9-29.7c-40.4-24.6-85.8-24.6-139.6,5.1c-40.4,24.6-72.4,68.7-81.2,108.1  c-8.8,34.3-8.8,98.3-4.6,132.7C2594.1,8488,2608,8502.8,2621.5,8527.4L2621.5,8527.4z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3347.5,8379.9c26.9,39.4,31.5,83.5,18.1,132.7  c26.9,19.5,58.5,49.2,72.4,103.4c4.6,34.3-8.8,64-31.5,88.6c-13.5,24.6-58.5,44.1-103.9,54.3c-8.8,5.1-18.1,0-26.9,5.1l-108.1,14.8  c-26.9,9.7-58.5,14.8-94.6,9.7c-18.1-9.7-31.5-19.5-49.6-29.7c-22.7-14.8-26.9-9.7-63.1,24.6c-13.5,9.7-36.2,14.8-63.1,9.7  c-40.4-9.7-54.3-24.6-67.7-49.2c-26.9,9.7-67.7,14.8-94.6,5.1c-18.1,5.1-49.6,5.1-67.7-9.7c-26.9-19.5-31.5-44.1-22.7-68.7  c31.5-34.3,63.1-73.8,103.9-108.1c45-29.7,85.8-49.2,130.8-58.9c36.2-9.7,81.2-9.7,144.3,0c31.5,5.1,58.5,9.7,90,14.8  c31.5,19.5,54.3,34.3,90,29.7c36.2-9.7,76.5-19.5,103.9-64C3329.4,8458.7,3338.2,8424.4,3347.5,8379.9L3347.5,8379.9z"></path>
	
	</g>
	<g>
					<text fill='#333333' x='9700' y='11700' style={{fontSize: 250}}>22</text>
					<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3414.7,8714.3c13.5-19.5,31.5-49.2,31.5-64  s-4.6-29.7-8.8-49.2c-26.9-54.3-67.7-64-67.7-78.9c13.5-83.5-4.6-137.8-22.7-142.4c-8.8,5.1-8.8,49.2-18.1,68.7  c-22.7,44.1-49.6,73.8-94.6,88.6c-18.1,14.8-36.2,14.8-58.5,14.8c-26.9,0-31.5-19.5-63.1-29.7c-18.1-9.7-54.3-5.1-67.7-9.7  c-63.1-14.8-99.3-24.6-193.9,5.1c-26.9,5.1-49.6,19.5-72.4,29.7c-36.2,19.5-94.6,73.8-130.8,128"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2779.2,8552c-22.7-5.1-40.4-24.6-63.1-29.7  c-18.1-5.1-58.5-5.1-94.6,5.1 M2986.5,8763.5c-13.5,19.5-49.6,34.3-58.5,39.4c-8.8,5.1-49.6-9.7-58.5-14.8  c-13.5-5.1-26.9-24.6-36.2-39.4c-4.6-24.6-8.8-54.3-4.6-78.9c4.6-24.6,18.1-44.1,31.5-58.9 M2833.5,8748.7  c-26.9,9.7-58.5,9.7-94.6,5.1 M3234.7,8537.1c49.6,19.5,36.2,98.3,63.1,108.1c13.5,5.1,4.6,44.1,4.6,64c0,24.6,8.8,49.2,4.6,58.9  c-8.8,14.8-45,5.1-67.7,9.7c-18.1,0-121.5,29.7-144.3,29.7c-22.7-5.1-63.1-29.7-72.4-39.4c-4.6-9.7,8.8-54.3,4.6-73.8  c-4.6-9.7-36.2-39.4-58.5-68.7"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3180.9,8792.7c-22.7-29.7,4.6-88.6-18.1-122.9  c-8.8-14.8-36.2-39.4-36.2-64"></path>
	</g>
	<g>
					<text fill='#333333' x='9100' y='11700' style={{fontSize: 250}}>23</text>
	<path id="iso-48" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2455.8,8604.4c9.3,23.2,46.4,41.8,41.8,64.9  c-23.2,144.3-92.8,279.3-185.6,344.2c-111.3,60.3-302,74.2-376.2,93.2c-37.1,13.9-139.2,18.6-199.5,4.6  c-97.4-46.4-180.9-83.5-260.2-260.2c-9.3-27.8-9.3-88.1-4.6-121.1c9.3-37.1,69.6-139.6,97.4-167.5c-18.6-13.9-23.2-121.1-9.3-172.1  c32.5-60.3,134.5-162.8,241.2-213.9c27.8-9.3,148.4-13.9,204.1,9.3c18.6,4.6,37.1,37.1,55.7,37.1c9.3-4.6,32.5-46.4,46.4-51  s125.3-4.6,199.5,18.6c74.2,23.2,134.5,102.5,162.4,162.8c13.9,27.8,13.9,107.2,4.6,162.8  C2469.8,8548.7,2455.8,8581.2,2455.8,8604.4L2455.8,8604.4z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2261,8609c9.3,9.3,27.8,0,32.5,13.9  c13.9,18.6,23.2,37.1,27.8,64.9c-9.3,13.9-13.9,27.8-23.2,41.8c-9.3,69.6-23.2,78.9-51,74.2c-13.9,0-37.1-18.6-64.9-60.3  c-23.2-37.1-46.4-69.6-78.9-55.7c-23.2,0-41.8,4.6-60.3,18.6c-23.2,9.3-18.6,13.9-41.8,23.2c-32.5,23.2-32.5,78.9-46.4,97.9  c-4.6,13.9-32.5,18.6-64.9,23.2c-41.8,0-88.1-4.6-129.9-4.6c-27.8-4.6-51-23.2-69.6-51c-18.6-18.6-55.7-51-78.9-69.6  c4.6-18.6,13.9-32.5,18.6-46.4c18.6-41.8,55.7-55.7,69.6-78.9c27.8-9.3,51-18.6,78.9-27.8c27.8-9.3,41.8-41.8,74.2-55.7  c37.1-13.9,69.6-4.6,106.7-9.3c32.5-13.9,60.3-32.5,92.8-46.4c46.4,0,69.6,13.9,88.1,32.5c18.6-4.6,55.7-9.3,88.1,0  C2265.6,8497.2,2284.2,8571.9,2261,8609L2261,8609z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M1713.1,8558c-4.6,18.6-23.2,32.5-37.1,41.8  c-18.6,9.3-51,74.2-51,83.5c4.6,13.9,69.6,51,83.5,74.2 M1768.8,8804.3c51,4.6,106.7,4.6,162.4,4.6c18.6-4.6,37.1-13.9,37.1-23.2"></path>
	</g>
	<g>
					<text fill='#333333' x='8500' y='11700' style={{fontSize: 250}}>24</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2279.6,8804.3c-13.9,4.6-27.8,4.6-37.1,0  c-13.9-9.3-83.5-107.2-97.4-111.8c-13.9-4.6-51-4.6-64.9,0c-18.6,9.3-83.5,51-92.8,46.4c-18.6-9.3-37.1-102.5-13.9-153.6  c-32.5-4.6-74.2,0-92.8-13.9s-46.4-18.6-64.9-9.3c-41.8,13.9-83.5,32.5-116,41.8c-51-4.6-83.5-60.3-129.9-41.8 M2307.4,8725.5  c4.6-13.9,23.2-27.8,23.2-41.8c0-18.6-18.6-55.7-27.8-64.9c-9.3-4.6-41.8-9.3-41.8-13.9s23.2-18.6,37.1-18.6  c18.6-4.6,27.8-46.4,51-46.4c18.6,0,69.6,32.5,106.7,64.9 M1972.9,8581.2c83.5-69.6,167-74.2,167-88.6c0-4.6-41.8-27.8-51-32.5  c-13.9-4.6-27.8,0-46.4,0c-32.5,18.6-55.7,41.8-83.5,46.4c-23.2,0-88.1-13.9-106.7-23.2c-18.6-9.3-74.2-37.1-97.4-74.2"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M1870.9,8376.6c46.4,32.5,92.8,60.3,153.1,74.2  c13.9,0,41.8,4.6,60.3,4.6c41.8-9.3,83.5-55.7,111.3-93.2"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M2075.4,8460.1c-23.2-9.3-41.8-27.8-51-41.8  s-4.6-46.4,0-74.2c9.3-27.8,27.8-37.1,37.1-55.7c9.3-23.2,4.6-46.4,0-64.9 M1708.5,8227.7l78.9,64.9"></path>
	</g>
	<g>
					<text fill='#333333' x='7900' y='11700' style={{fontSize: 250}}>25</text>
	<path id="iso-46" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M3691.2,8539.9c-9.7,30.2-78.4,99.7-83.5,129.9  c-9.7,39.9-9.7,199.9,24.6,249.6c9.7,14.8,39.4,104.8,122.5,135c24.6,10.2,93.2,10.2,152.2,34.8c19.5,0,44.1,30.2,132.7,25.1  c93.2,5.1,152.2-19.9,196.2-39.9c24.6-10.2,112.7,19.9,215.7-90c19.5-30.2,53.8-84.9,73.8-99.7c39.4-30.2,108.1-75.2,122.5-109.9  c9.7-34.8,5.1-104.8-5.1-135c0-25.1-39.4-90-39.4-115c0-45-14.8-135-34.3-160c-49.2-90-156.8-164.7-206-184.6  c-29.2-10.2-142.4-10.2-186.5,5.1c-19.5,10.2-58.9,39.9-78.4,39.9c-19.5,0-68.7-39.9-93.2-39.9c-117.8-5.1-250,84.9-314.1,180  C3676.4,8400.3,3700.9,8515.3,3691.2,8539.9L3691.2,8539.9z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M4441.8,8565c-49.2-54.7-97.9-50.1-117.8-54.7  c-19.5,0-39.4,5.1-58.9,5.1c-29.2-14.8-53.8-25.1-83.5-39.9l-88.1,14.8c-9.7-5.1-24.6-5.1-34.3-10.2c5.1,10.2,5.1,25.1,5.1,34.8  c-34.3,0-58.9,0-73.8,14.8c-14.8,25.1-14.8,54.7-14.8,84.9c-24.6,5.1-39.4,19.9-49.2,34.8c-24.6,59.8-39.4,99.7,5.1,149.8  c24.6,5.1,44.1,5.1,63.6,10.2c5.1,5.1,14.8,10.2,24.6,14.8c9.7,0,19.5-5.1,29.2-5.1c34.3-14.8,68.7-34.8,103-50.1  c14.8-5.1,34.3-5.1,53.8-5.1c14.8,0,29.2,0,34.3,5.1c24.6,5.1,49.2,5.1,73.8,10.2h73.8v-25.1h53.8c5.1-5.1,5.1-14.8,5.1-19.9  c0-14.8-5.1-30.2-5.1-45c14.8-10.2,24.6-19.9,34.3-30.2C4466.4,8629.9,4461.3,8595.1,4441.8,8565L4441.8,8565z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M4245.6,8770c34.3,10.2,122.5,14.8,142.4,10.2  c9.7-5.1-5.1-14.8,0-25.1c9.7-5.1,39.4,5.1,53.8,0c9.7-5.1,0-39.9,0-64.9c5.1-10.2,34.3-10.2,34.3-30.2 M4382.9,8475  c-5.1-14.8,5.1-34.8,14.8-34.8c14.8,0,93.2,0,103,5.1c5.1,5.1-5.1,19.9,5.1,25.1c9.7,5.1,29.2-5.1,39.4,0c5.1,5.1-5.1,70,19.5,70  c14.8-5.1,24.6-34.8,39.4-50.1 M4221,8734.8c-39.4-14.8-73.8-50.1-83.5-79.8c-9.7-25.1-29.2-54.7-49.2-70  c-9.7-14.8-14.8-34.8-19.5-54.7c0-14.8-9.7-30.2-9.7-50.1c63.6,30.2,83.5-10.2,122.5-5.1c34.3,10.2,58.9,30.2,78.4,39.9  c14.8,5.1,49.2-14.8,68.7,0c14.8,10.2,9.7,79.8-5.1,124.8"></path>
	</g>
	<g>
					<text fill='#333333' x='7200' y='11700' style={{fontSize: 250}}>26</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M4182,8475l24.6-25.1c14.8-10.2-5.1-45,9.7-54.7  c5.1-5.1,9.7-5.1,19.5-10.2c5.1-5.1,5.1-39.9,0-64.9 M4059.1,8485.2c0-10.2-5.1-25-14.8-34.8c-5.1-5.1-19.5-10.2-24.6-19.9  c-9.7-19.9-9.7-54.7-19.5-54.7c-9.7-5.1-24.6-19.9-29.2-34.8 M3926.9,8669.8c5.1-14.8,9.7-34.8,19.5-39.9  c9.7-5.1,29.2-5.1,34.3-14.8c5.1-10.2,0-34.8,0-50.1c-5.1-10.2,5.1-39.9,24.6-45c19.5-10.2,39.4-10.2,58.9-5.1 M3789.6,8819.6  c5.1-10.2-19.5-14.8-24.6-25.1c-5.1-14.8-9.7-79.8-5.1-90c5.1-10.2,14.8-10.2,24.6-19.9c9.7-14.8-5.1-39.9,9.7-50.1  c19.5-10.2,19.5-50.1,39.4-64.9c9.7-10.2,19.5-25.1,34.3-39.9c19.5-14.8,34.3,0,39.4-14.8c5.1-10.2-19.5-30.2-39.4-30.2  c-29.2,0-34.3-30.2-58.9-45 M4147.7,8770c-24.6,5.1-49.2,25.1-73.8,39.9c-14.8,10.2-44.1,19.9-53.8,19.9  c-14.8,0-19.5-14.8-39.4-19.9c-19.5-5.1-49.2,5.1-49.2-5.1c0-14.8,34.3-30.2,49.2-34.8c53.8-54.7,44.1-75.2,68.7-95.1  c29.2-14.8,24.6-70,39.4-90"></path>
	<path id="iso-45" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5497.2,8567.8c14.4,21.8,19,74.2,0,126.6  c-9.3,13-23.7,30.6-33.4,43.6c-9.3,17.6,14.4,61.2-14.4,100.7c-33.4,48.2-161.4,135.5-246.8,153.1c-38,8.8-151.7,13-208.8-13  c-52-21.8-208.8-87.2-246.8-166.1c-23.7-52.4-28.3-209.7-14.4-266.7c9.3-39.4,33.4-91.9,47.3-109.5  c33.4-43.6,104.4-109.5,161.4-126.6c19-8.8,90-8.8,109,0c28.3,13,52,34.8,71,34.8c19,0,47.3-30.6,71-39.4  c33.4-8.8,94.6-17.6,161.4,0c42.7,13,76.1,65.4,85.4,96c4.6,30.6,9.3,65.4,4.6,100.7C5449.8,8524.1,5478.1,8541.3,5497.2,8567.8z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5255.5,8467.1c4.6-17.6,14.4-30.6,33.4-43.6  c9.3,4.2,19,13,28.3,17.6c33.4,61.2,23.7,100.7-4.6,131.3c9.3,34.8-61.7,52.4-61.7,83c23.7,4.2,47.3,17.6,47.3,43.6  c-4.6,13-14.4,30.6-19,43.6c-14.4,0-23.7,4.2-38,8.8c-33.4,4.2-42.7,13-42.7,30.6s-9.3,26.4-28.3,30.6c-19,8.8-42.7-8.8-66.3-43.6  c-23.7-17.6-61.7,21.8-109,21.8c-47.3-4.2-71-21.8-99.7-30.6c-19-4.2-33.4-21.8-42.7-48.2c-4.6-26.4-4.6-48.2,0-74.2  c4.6-21.8,19-39.4,38-56.6c-23.7-8.8-42.7-17.6-47.3-52.4c-4.6-8.8-4.6-21.8-4.6-34.8c19,0,47.3,4.2,71,17.6  c23.7,4.2,42.7,0,66.3-4.2c23.7-4.2,42.7-8.8,61.7-13c28.3-13-47.3-61.2,9.3-56.6c9.3,8.8,9.3,4.2,19,13c9.3,13,23.7,21.8,47.3,13  c9.3,4.2,19,0,19-13c4.6-13,9.3-30.6,14.4-48.2c0-8.8,4.6-13,9.3-21.8c4.6,4.2,9.3,8.8,9.3,13c4.6,21.8,4.6,43.6,9.3,65.4  C5193.8,8475.9,5222.1,8480.1,5255.5,8467.1L5255.5,8467.1z"></path>
	</g>
	<g>
					<text fill='#333333' x='6600' y='11700' style={{fontSize: 250}}>27</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5440.1,8501.9c-28.3-21.8-61.7-17.6-94.6-39.4  c-19-8.8-42.7-43.6-52-39.4c-14.4,4.2-38,26.4-38,43.6 M5046.7,8493.5c-38,8.8-85.4,21.8-113.7,21.8s-85.4-26.4-90-17.6  c0,13,4.6,56.6,19,70c9.3,8.8,47.3,26.4,76.1,26.4c33.4,0,94.6,13,109,8.8c19-8.8,38-43.6,52-43.6c14.4,0,47.3,17.6,71,26.4  c23.7,13,52,17.6,71,13c23.7-8.8,61.7-34.8,76.1-26.4c9.3,4.2,23.7,56.6,42.7,70c33.4,34.8,71,74.2,104.4,96 M4889.9,8584.9  c-19,17.6-23.7,26.4-33.4,48.2c-9.3,21.8-9.3,43.6-4.6,65.4c4.6,21.8,19,70,57.1,70"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5084.3,8676.8c-4.6-30.6-33.4-70-38-70  c-9.3,0-57.1,43.6-61.7,61.2c-4.6,13-9.3,30.6-4.6,39.4 M5098.7,8768.6c19,4.2,42.7,43.6,52,48.2c9.3,4.2,33.4-4.2,38-8.8  c4.6-8.8,9.3-34.8,19-43.6c4.6-8.8,57.1-8.8,66.3-13c9.3-4.2,28.3-43.6,28.3-56.6s-33.4-34.8-47.3-34.8 M5046.7,8436.5  c14.4,4.2,28.3,26.4,38,26.4c4.6,4.2,33.4,4.2,42.7,0c4.6,0,19-78.9,28.3-83c9.3,4.2,19,52.4,19,78.9"></path>
	<path id="iso-44" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6213,8575.6c15.3,30.2,26.9,77.5,11.6,120.6  c-62.2,163.8-147.5,237.1-267.7,306.2c-31.1,17.2-97,13-131.7-4.2c-50.6-26-178.1-125.3-217.1-258.9c-7.9-34.3-31.1-82.1-19.5-159.6  c7.9-39,77.5-176.7,100.7-202.7c23.2-34.3,69.6-64.5,104.8-82.1c54.3-30.2,97-26,159.1,4.2c54.3,26,123.9,73.3,151.2,99.3  C6135.5,8429,6178.2,8511.2,6213,8575.6L6213,8575.6z" style={{cursor: 'pointer'}}></path>
	</g>
	<g>
					<text fill='#333333' x='6000' y='11700' style={{fontSize: 250}}>28</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6092.8,8692.5c-19.5,4.2-34.8,8.8-50.6,13  c-26.9,8.8-46.4,8.8-69.6-8.8c-19.5-30.2-34.8-64.5-39-133.6c11.6-34.3,23.2-64.5,50.6-90.5c26.9-4.2,0,39,19.5,73.3  c26.9,26,46.4,26,73.8,34.3c11.6,8.8,19.5,26,23.2,52C6108.1,8670.7,6108.1,8692.5,6092.8,8692.5z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5893.3,8644.8c-3.7,26-11.6,52-15.3,73.3  c-34.8-13-65.9-21.3-93.2-26c-34.8,13-58,4.2-62.2-43.1c7.9-56.1,26.9-103.4,77.5-133.6c15.3-17.2,3.7-103.5,39-86.3  c11.6,8.8,19.5,21.3,31.1,30.2c11.6,13,23.2,26,15.3,107.6C5885.4,8593.3,5889.6,8618.8,5893.3,8644.8L5893.3,8644.8z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M5972.7,8696.7c-26.9-21.3-42.7-99.3-39-133.6  c11.6-43.1,31.1-73.3,50.6-90.5 M6042.2,8705.1c23.2,0,58-13,62.2-21.3c3.7-13-3.7-39-3.7-52c-3.7-21.3-15.3-43.1-23.2-52   M5747.7,8692.5c39-8.8,81.2,30.2,93.2,26c11.6-4.2,23.2-95.1,11.6-116.4c-11.6-26,3.7-82.1,0-103.4c-7.9-26-26.9-52-50.6-69.1   M5685.5,8653.6c7.9-56.1,19.5-103.5,77.5-138.2"></path>
	</g>
	<g>
					<text fill='#333333' x='5200' y='11700' style={{fontSize: 250}}>29</text>
	<path id="iso-43" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6891.2,8559.4c24.1,46.9,20.4,110.4,4.2,144.7  c-36.2,64-72.8,127.6-116.9,178.6c-32.5,29.7-121.1,106.2-137.3,110.4c-32.5,8.4-165.6,13-201.8,0  c-44.5-17.2-113.2-157.3-133.1-217.1c-12.1-55.2-20.4-119.2,4.2-178.6c12.1-51,44.5-115,72.8-148.9c44.5-59.4,88.6-89.5,153.6-127.6  c32.5-17.2,88.6-25.5,129.4,0C6737.6,8380.8,6874.9,8533.9,6891.2,8559.4L6891.2,8559.4z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6778,8593.3c12.1,38.5-4.2,51-16.2,72.4  c-28.3,13-80.7,42.7-104.8,25.5c-32.5,4.2-64.5-25.5-56.6-144.7c0-38.5-20.4-157.3,7.9-182.8c76.5,55.2,68.7,46.9,84.9,144.7  c28.3,21.3,28.3,33.9,56.6,42.7C6761.8,8559.4,6773.8,8567.8,6778,8593.3L6778,8593.3z"></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6523.8,8508.4c-20.4-33.9-88.6-33.9-97-17.2  c-12.1,8.4-16.2,21.3-20.4,25.5c-20.4,29.7-32.5,46.9-36.2,76.5c7.9,29.7,32.5,17.2,44.5,42.7c7.9,13,4.2,29.7,20.4,46.9  c28.3,25.5,64.5,17.2,92.8,4.2c4.2-8.4,7.9-21.3,7.9-42.7c0-17.2-20.4-8.4-28.3-17.2c-12.1-17.2-4.2-46.9,4.2-64  C6515.4,8555.2,6539.5,8525.1,6523.8,8508.4L6523.8,8508.4z"></path>
	</g>
	<g>
					<text fill='#333333' x='4300' y='11700' style={{fontSize: 250}}>30</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M6604.5,8627.6c4.2-89.5-12.1-259.3,7.9-264  c12.1,0,52.4,42.7,64.5,59.4c16.2,17.2,7.9,64,20.4,84.9 M6414.3,8631.8c-4.2-8.4-12.1-17.2-20.4-21.3c-7.9-4.2-20.4-8.4-24.1-17.2  c-4.2-8.4,12.1-38.5,16.2-51c4.2-8.4,32.5-51,40.4-55.2c7.9-4.2,44.5-4.2,68.7,0 M6495.5,8691.1c12.1,0,28.3,0,32.5-8.4  s7.9-42.7,4.2-46.9c-4.2-8.4-16.2,0-24.1-8.4c-4.2-13-4.2-46.9,0-68.2 M6660.6,8691.1c20.4,0,48.2,0,60.8-4.2  c7.9-4.2,40.4-17.2,52.4-38.5c7.9-13,4.2-38.5,4.2-51"></path>
	<path id="iso-42" fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7248.4,8312.1c-90,86.7-184.2,187.9-265.4,298.8  c-31.5,43.1-22.3,101.1-4.6,149.4c58.5,125.3,153.1,183.2,206.9,207.4c76.5,14.4,220.4,9.7,260.7-9.7  c40.4-19.5,116.9-101.1,130.4-149.4c26.9-82.1,0-183.2-13.5-207.4c-13.5-24.1-71.9-72.4-85.4-91.4c-13.5-24.1-22.3-48.2-31.5-82.1  c-8.8-33.9-53.8-91.4-81.2-106.2C7324.9,8292.7,7275.8,8297.8,7248.4,8312.1z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7351.8,8398.9c13.5,14.4,22.3,33.9,36.2,48.2  c4.6,14.4,4.6,24.1,4.6,38.5c18.1,14.4,31.5,24.1,49.6,38.5c0,19.5,4.6,33.9,4.6,52.9c22.3,14.4,40.4,28.8,40.4,67.3v28.8  c-22.3,77-94.6,0-139.6-9.7c-18.1,0-40.4,4.6-63.1,9.7c-13.5,4.6-26.9,9.7-45,14.4c-26.9,0-53.8,4.6-81.2,4.6  c-4.6,4.6-8.8,19.5-31.5,33.9c-40.4,0-40.4-14.4-49.6-28.8c-4.6-38.5-8.8-77,18.1-110.9c18.1-24.1,36.2-52.9,53.8-52.9  c26.9,4.6,53.8,0,81.2-9.7c-13.5-33.9-4.6-48.2,22.3-52.9c4.6-9.7,4.6-24.1,4.6-33.9c0-43.1,13.5-72.4,45-72.4  C7316.1,8365,7338.4,8374.8,7351.8,8398.9L7351.8,8398.9z"></path>
	</g>
	<g>
					<text fill='#333333' x='2800' y='11700' style={{fontSize: 250}}>31</text>
	<path fill="#FAFAFAFAFAFA" stroke="#010101" strokeWidth="10" strokeMiterlimit="10" d="M7486.8,8673.5c0-19.5,0-48.2-4.6-62.6  s-31.5-19.5-36.2-33.9c-4.6-19.5,0-43.1-4.6-52.9c-8.8-9.7-45-24.1-49.6-33.9c-4.6-14.4,4.6-28.8,0-38.5  c-13.5-24.1-26.9-38.5-45-48.2 M7073,8702.3c0-33.9-4.6-72.4,4.6-91.4c9.3-19,45-38.5,49.6-62.6c4.6-24.1,85.4-4.6,98.8-24.1  c8.8-4.6-4.6-28.8,0-38.5c4.6-9.7,18.1-4.6,26.9-14.4c8.8-14.4-4.6-48.2,4.6-67.3c13.5-33.9,22.3-43.1,45-33.9 M7158.4,8692.5  c31.5-9.7,90,4.6,112.3-14.4c18.1-14.4,67.3-19.5,94.6-14.4"></path>
	<path id="iso-41" fill="#FAFAFAFAFAFA" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8216.1,8737.5  c-14.4,54.7-48.2,154.5-125.7,194.4c-48.2,25.1-169.3,25.1-222.2,5.1c-62.6-19.9-111.3-25-149.8-45c-33.9-25-62.6-69.6-77.5-124.8  c-4.6-79.8-4.6-174.4,9.7-209.2c53.3-109.5,198.1-269.1,261.2-298.8c38.5-14.8,91.9-19.9,145.2,19.9  c38.5,29.7,120.6,169.3,159.6,274.2C8230.5,8613.2,8220.7,8682.8,8216.1,8737.5z" style={{cursor: 'pointer'}}></path>
	<path fill="#FAFAFAFAFAFA" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M7979,8328.8c33.9,9.7,58,39.9,77.5,69.6  c19.5,29.7,38.5,64.9,58,94.6c19.5,34.8,29.2,64.9,29.2,99.7c-4.6,29.7-29.2,25.1-53.3,29.7h-62.6c-43.6,5.1-87.2,9.7-130.4,5.1  c-43.6-5.1-72.4-9.7-96.5,0H7767c-24.1,0-38.5-9.7-29.2-34.8c14.4-39.9,43.6-64.9,77.5-89.5l72.4-59.8c9.7-19.9,19.5-49.6,29.2-69.6  C7921,8348.8,7945.6,8328.8,7979,8328.8L7979,8328.8z"></path>
				</g>
				<g>
					<text fill='#333333' x='1700' y='11700' style={{fontSize: 250}}>32</text>
	<path fill="#FAFAFAFAFAFA" stroke="#020202" strokeWidth="10" strokeMiterlimit="10" d="M8138.6,8597.9c4.6-34.8-9.7-79.8-24.1-99.7  c-9.7-19.9-48.2-84.9-72.4-124.8c-14.4-25.1-38.5-39.9-58-39.9 M7800.4,8623c-19.5,5.1-43.6,5.1-58-5.1c-9.7-14.8,0-39.9,9.7-49.6  c33.9-54.7,116-99.7,135.5-124.8c9.7-9.7,19.5-49.6,38.5-64.9 M7896.9,8623c62.6,9.7,125.7-5.1,193.4-9.7"></path>
	<path
		transform='translate(-900, 2500)'
       style={{opacity:1, fill:'#000000', fillOpacity:0, stroke:'#efa8ad', strokeWidth:50, strokeLinecap:'butt', strokeLinejoin:'miter', strokeMiterlimit:'4', strokeDasharray: 'none', strokeOpacity:1}}
       d="m 2466.0667,2700.5669 c 59.6591,18.1154 110.0296,-3.6076 169.4444,-5.5556 7.2647,-48.8642 56.3747,-58.4627 75,-77.7778 47.124,-38.4286 99.3904,20.7064 133.3333,27.7778 58.726,111.1288 194.7516,53.2811 294.4445,80.5556 127.9842,22.7916 312.4028,-44.7213 388.8889,-61.1111 70.4584,-35.8441 139.2577,-70.5573 208.3333,-105.5556 115.2446,-8.1035 186.368,88.4777 275,130.5556 38.7161,33.1144 88.0808,-8.1936 119.4445,-11.1112 35.2015,11.6106 38.6449,47.046 63.8888,77.7778 111.9913,-6.5553 215.4844,22.4853 319.4445,33.3334 103.7049,-16.2947 207.5388,-73.7054 297.2222,-105.5556 17.843,-30.1453 43.0742,-31.0134 69.4445,-50 58.1691,21.3159 128.5909,42.8637 175,58.3333 44.7872,28.9209 95.7869,33.157 144.4444,50 29.9203,-33.8495 57.1894,22.8758 69.4444,27.7778 120.8462,16.5358 272.8311,-0.1125 375,-2.7778 78.2447,-49.0869 215.8639,-20.8289 316.6667,-30.5555 30.465,-14.5952 29.2758,25.0935 38.8889,33.3333 108.5169,43.442 226.5754,26.0958 344.4444,33.3333 73.2501,-155.5218 259.9427,-2.2802 316.6667,-2.7777 125.2706,-7.3825 264.4152,21.9011 375,30.5555 83.9702,-143.6099 243.9972,-2.1034 322.2222,-2.7778 83.3821,63.1107 218.1215,80.7858 300,111.1112 133.524,-164.7538 304.0516,-37.8761 455.5556,0 126.3422,-9.7602 254.7729,4.4859 377.7778,5.5555 226.6625,-198.2421 232.641,-94.8252 455.5555,27.7778 70.5506,74.1001 198.5514,43.4331 266.6667,58.3333 -7.0708,21.5251 7.3861,35.084 11.1111,52.7778 91.5046,-13.1318 171.2144,7.2857 261.1111,11.1111 63.7145,-30.4172 120.2639,-69.5275 177.7778,-102.7778 126.6368,-7.958 290.8849,-26.6546 388.8891,-36.1111 32.377,20.7054 35.469,58.4191 47.222,77.7778 64.38,44.53 157.986,57.4496 213.889,77.7778 57.633,-19.1141 99.727,-57.251 150,-86.1111 21.834,-3.1076 23.396,-29.7765 30.555,-38.8889 87.016,-63.3074 204.04,-54.2858 302.778,-80.5556 1.306,11.9467 -1.472,17.6675 -2.778,33.3334 43.886,42.0113 101.397,36.8714 152.778,55.5555 52.749,2.0714 100.219,-23.581 141.667,-33.3333 10.578,-23.8156 21.238,-46.3376 30.555,-66.6667 124.603,-40.5946 259.816,-37.6089 383.334,-52.7778 88.128,-163.4794 255.619,2.2036 322.222,2.7778 98.123,-65.5211 244.398,-12.6413 322.222,-16.6667 103.85,-102.4905 259.682,-22.7736 372.222,-13.8888 120.226,-40.6796 246.532,-2.3248 363.889,2.7777 44.142,-43.7233 105.835,-29.7079 158.334,-44.4444 79.8,-75.7836 169.784,-49.8278 255.555,-75 125.931,49.0204 240.142,108.1929 347.222,155.5555 99.72,-11.5249 233.701,-30.4698 333.334,-47.2222 -41,-45.0967 33.688,-69.6231 41.666,-86.1111 45.81,-8.189 83.038,11.0717 125,16.6667 65.791,-87.0415 175.098,-92.2559 258.334,-136.1111 100.278,-19.4093 148.896,72.587 222.222,108.3333 113.969,42.7484 284.023,48.5684 386.111,58.3333 72.687,8.4088 143.7,-9.4539 211.111,-13.8889 58.073,-64.3095 150.192,-68.2688 213.889,-97.2222 30.552,22.7628 68.996,46.6191 102.778,69.4445 41.594,15.1525 136.624,9.7588 155.555,11.1111"
       id="path6035" />

<path
	transform='translate(-900, 2500)'
       style={{fill:'none', stroke:'#efa8ad', strokeWidth:50, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit:4, strokeDasharray: 'none', strokeOpacity:1}}
       d="m 2408.2235,7573.606 c 128.5794,13.278 254.902,43.137 382.353,64.706 79.2405,-4.6812 188.2619,-50.5093 241.1764,-64.7059 82.2012,-51.1919 241.8952,16.8764 252.9412,17.647 83.8917,-58.6358 242.0331,0 294.1177,0 71.1327,11.9377 122.7655,7.0152 205.8823,11.7647 86.5266,6.4805 176.6836,61.8393 235.2941,82.353 63.2457,-15.0646 128.8044,-8.0503 188.2353,-11.7647 65.1949,-53.9824 109.4668,-44.4709 188.2353,-76.4706 146.4066,15.4372 318.9822,25.1828 447.0588,35.2941 116.1551,-5.7125 227.6692,7.8507 341.1765,11.7647 95.5356,17.3666 192.2456,-4.0903 276.4706,-5.8823 67.8106,1.7351 112.3421,-49.9298 158.8235,-70.5883 136.1947,-56.9107 249.7408,33.2988 352.9412,47.0588 27.6766,100.1361 137.6882,55.0753 205.8824,82.353 92.5856,33.9737 147.0673,-67.2308 205.8823,-94.1177 146.5974,20.526 267.4078,87.8056 394.1177,129.4118 36.4813,-57.2949 155.3128,-63.2756 158.8235,-64.7059 60.7912,-46.6631 103.8918,3.5825 170.5882,5.8824 126.2942,43.3675 236.1366,-52.9272 341.1765,-76.4706 29.2269,-53.9451 87.7466,-51.8503 129.4118,-76.4706 56.2493,-68.6774 115.8857,24.8326 164.7058,35.2941 108.4126,3.2583 233.8802,81.1421 288.2353,100 103.535,53.617 193.3691,-24.6854 276.4706,-35.2941 108.9154,-35.0749 235.9524,22.2597 311.7647,29.4118 88.2851,30.2957 160.8221,-42.3216 223.5294,-58.8236 58.0002,-10.763 138.6516,13.8652 176.4706,17.6471 65.164,24.0403 140.8922,8.051 205.8824,11.7647 78.6667,154.7577 253.9725,77.4831 347.0588,105.8824 41.941,-15.0876 67.9349,-37.7416 105.8824,-58.8236 80.3592,-52.2462 207.1843,-44.0818 276.4706,-58.8235 55.6976,104.7868 186.0656,50.7452 258.8236,70.5882 60.952,-117.5883 221.898,-69.3432 282.353,-88.2353 33.072,-69.5426 145.141,-60.8658 182.353,-76.4706 92.877,46.2929 109.236,83.0193 147.059,111.7648 121.269,-34.1388 277.992,70.7618 323.529,82.3529 83.37,62.8953 259.514,47.1844 323.529,58.8235 112.744,-119.7866 289.915,-119.1431 429.412,-176.4706 120.924,38.4694 242.799,15.175 376.471,23.5294 108.752,-60.3665 247.55,-36.5238 358.823,-52.9411 7.843,-9.8039 15.686,-19.6079 23.53,-29.4118 199.828,-39.9576 402.922,-27.9253 594.117,-41.1765 47.065,58.8281 107.985,103.9851 158.824,152.9412 167.47,33.4985 364.914,-30.4095 494.118,-41.1765 91.409,22.9348 215.673,70.2192 252.941,82.353 126.48,29.7699 155.918,-44.548 247.059,-70.5883 80.298,-29.0514 176.902,-8.228 252.941,-11.7647 91.99,-28.5309 181.903,-15.4811 276.47,-23.5294 48.936,-15.9472 31.692,-71.3065 47.059,-105.8823 184.916,-6.4962 413.761,-59.7181 570.588,-82.353 105.125,8.937 185.996,73.6235 282.353,111.7647 1.12,25.291 -19.132,66.9627 -23.529,82.353"
       id="path6041" />
	{/* <path fill="none" stroke="#EFA8AD" strokeWidth="40" strokeMiterlimit="10" d="M1621.3,5214.8c48.7,7.4,113.7,8.4,167-27.8  c68.2-46.4,68.2-120.1,111.3-125.3c55.7-6.5,67.7,116.4,167,153.1c84.9,31.5,124.8-39.9,236.6-13.9c94.2,21.8,93.7,78.9,167,83.5  c71,4.6,91.9-47.3,250.5-139.2c97.9-56.6,147.1-84.9,194.8-83.5c69.6,1.9,325.7,198.1,264.4,153.1c100.2-13.9,166.5,6.5,208.8,27.8  c66.8,33.9,82.1,75.6,139.2,83.5c57.1,7.9,90.5-26.9,167-69.6c56.6-31.5,192.5-106.7,334-97.4c99.7,6.5,95.1,48.7,250.5,69.6  c79.3,10.7,105.8,3.2,153.1,27.8c86.7,45.5,82.6,115,139.2,125.3c65.9,11.6,84-81.2,208.8-125.3c86.7-30.6,174.4-19.9,222.7-13.9  c58.9,7.4,153.1,27.8,153.1,27.8c24.1,44.1,64.9,103,125.3,111.3c63.1,8.8,90-46.4,208.8-97.4c65.4-28.3,154.5-66.8,250.5-41.8  c57.5,14.8,106.2,49.6,153.1,83.5c77.9,55.7,76.5,77.5,111.3,83.5c76.1,13,102.1-87.7,222.7-125.3c81.2-25.5,179.1-13.9,250.5,27.8  c89.5,52,78.9,116.9,153.1,139.2c55.7,16.7,80.3-14.4,222.7-55.7c127.6-37.1,191.1-55.2,250.5-41.8  c117.8,26.9,122.9,125.3,236.6,139.2c47.3,5.6,91.9-10.2,180.9-41.8c74.7-26.4,92.3-44.1,194.8-83.5  c74.7-28.8,111.8-43.1,139.2-41.8c68.2,2.8,117.8,45.5,208.8,125.3c98.8,86.7,105.8,120.1,153.1,125.3c36.6,4.2,57.1-13,180.9-97.4  c169.3-115.5,191.6-125.3,222.7-125.3c49.2-0.5,97.9,32.5,194.8,97.4c118.8,79.8,120.1,106.7,167,111.3  c72.8,7.4,91.4-55.2,236.6-125.3c79.8-38.5,162.4-78.4,250.5-55.7c31.5,8.4,32,16.2,139.2,83.5c109.5,68.7,165.1,103,194.8,97.4  c70.5-13.5,56.1-105.3,167-180.9c19-13,88.6-58.9,180.9-55.7c58.9,2.3,103,23.7,139.2,41.8c113.2,55.7,113.7,109.9,167,111.3  c76.1,1.9,84.9-108.1,222.7-167c20.4-8.8,78.4-32.9,153.1-27.8c68.7,4.6,121.5,32,167,55.7c96.5,50.6,95.1,81.6,139.2,83.5  c74.7,2.8,81.6-86.7,194.8-125.3c90.9-31.1,208.8-13.9,208.8-13.9s84.4,17.6,139.2,41.8c105.8,46.4,111.8,120.6,167,125.3  c67.7,6,69.6-138.2,167-167c59.8-17.6,78.9,27.4,153.1,13.9c93.2-17.2,96.5-94.2,180.9-111.3c54.7-11.1,63.1,19.5,222.7,69.6  c110.4,34.8,110.9,21.3,208.8,55.7c117.4,40.8,123.4,62.2,167,55.7c0,0,40.4-6,180.9-139.2l0,0c34.3,19.5,85.8,40.8,139.2,27.8  c63.6-15.3,71-64.9,153.1-111.3c28.3-15.8,102.1-57.5,180.9-41.8c56.6,11.1,58.5,40.4,167,111.3c71.4,46.9,110.9,72.4,167,83.5  c40.4,7.9,57.1,1.9,208.8-27.8c203.7-39.9,209.7-36.2,264.4-55.7c69.1-25.1,167-69.6,167-69.6l0,0l0,0c0,0,161.4,62.6,250.5,97.4"></path>
	<path fill="none" stroke="#EFA8AD" strokeWidth="40" strokeMiterlimit="10" d="M1593.5,10092.5c131.3,57.5,234.7,62.6,306.2,55.7  c96.5-9.3,140.1-40.8,250.5-55.7c138.7-19,176.7,46.9,278.3,13.9c79.3-26,86.3-66.8,153.1-69.6c70-2.8,83,41.8,180.9,69.6  c98.3,28.3,113.7-8.8,222.7,13.9c110.4,22.7,122,66.3,208.8,83.5c93.2,18.6,172.1-17.6,264.4-55.7c167.5-69.1,167-125.7,250.5-125.3  c103.9,0.5,114.1,88.6,278.3,125.3c59.8,13.5,111.3,13.5,180.9,13.9c104.8,0.5,107.6-12.1,208.8-13.9c145.7-2.8,178.6,22.7,264.4,0  c38.5-10.2,71.9-31.1,139.2-69.6c107.6-61.7,114.6-83,153.1-83.5c56.1-0.5,69.1,45.5,180.9,125.3c88.1,62.6,133.1,95.1,194.8,97.4  c53.3,1.9,110.9-31.1,222.7-97.4c132.7-78.4,143.8-103.9,180.9-97.4c84.9,14.8,69.1,155.9,194.8,222.7  c71.4,37.6,148.4,30.6,180.9,27.8c89.1-7.9,151.7-45.9,167-55.7c111.3-70.5,109.5-157.7,180.9-167c47.3-6,48.2,32,153.1,69.6l0,0  c63.6,42.2,222.7,41.8,222.7,41.8l0,0c91.9-94.2,154.9-104.4,194.8-97.4c84.9,14.8,93.7,113.2,194.8,139.2  c74.7,19,148-13.9,208.8-41.8c110.9-50.1,118.8-100.7,180.9-97.4c0,0,28.8,1.4,167,97.4l0,0c65.4,68.2,127.1,80.7,153.1,83.5  c111.8,12.5,216.2-70,250.5-97.4c61.7-48.7,69.6-79.3,111.3-83.5c36.2-3.7,58.9,16.2,153.1,83.5c145.7,103.9,165.1,109,180.9,111.3  c92.8,13,176.3-54.7,194.8-69.6c88.6-71.9,87.7-149.4,139.2-153.1c46.4-3.2,54.7,58.9,139.2,111.3c9.3,5.6,131.7,79.3,250.5,41.8  c96-30.6,101.1-106.2,180.9-111.3c65.9-4.2,74.2,46.9,167,69.6c127.6,31.5,246.8-32,264.4-41.8c105.3-58,116.9-131.7,167-125.3  c64.9,8.4,52,131.7,153.1,222.7c83,74.7,226.8,112.7,334,69.6c125.7-51,127.1-184.2,236.6-194.8c16.2-1.4,22.3,0.9,167,55.7  c119.7,45.5,180.5,68.2,208.8,69.6c89.1,4.6,161.9-32,208.8-55.7c113.2-57.1,113.7-104.8,180.9-111.3c71-7,92.8,45,208.8,83.5  c52.4,17.6,104.4,20.9,208.8,27.8c152.2,10.2,172.1-5.1,361.8,0c146.1,3.7,150.8,13,194.8,0c115-34.8,131.3-113.7,222.7-125.3  c55.7-7,74.2,19.5,208.8,83.5c170.7,81.2,256.1,122,334,111.3c129-17.6,137.8-122.5,264.4-125.3c107.6-2.3,151.7,72.8,222.7,41.8  c73.8-32.5,68.7-132.7,125.3-139.2c47.3-5.6,61.2,64,139.2,97.4c82.1,35.3,116.4-20.9,236.6-13.9c154,8.8,179.1,104.8,292.3,83.5  c77.9-14.4,87.2-63.6,180.9-83.5c73.3-15.3,138.7-0.5,180.9,13.9"></path> */}
{ /*</g>
</svg>
			 */}
			 {/* <svg
				style={{ maxHeight: "600px" }}
				version="1.1"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 560 1055"
			>
				<defs>
					<path
						style={{ cursor: "pointer" }}
						d="M266.17 8.55C259.99 -4.36 193.1 6.32 197.86 21.38C206.17 47.66 225.74 73.28 248.05 67.4C267.9 62.17 262.54 20.32 266.17 8.55Z"
						id="iso-11"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M250.64 19.39C239.08 14.5 227 16.21 214.06 26.43"
						id="iso-11a"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M145.49 62.43C137.94 40.31 191.03 12.91 200.03 32.34C205.95 45.15 204.62 79.12 191.95 86.18C177.61 94.17 150.76 77.86 145.49 62.43Z"
						id="iso-12"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M186.48 40.87C177.65 41.5 170.4 40.72 159.99 53.98"
						id="iso-12a"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M150.11 75.16C142.5 69.28 129.83 70.79 121.26 75.16C111.64 80.07 105.24 91.01 102.25 101.39C99.52 110.86 104.3 132.99 114.05 131.55C134.71 128.49 156.11 139.07 161.91 120.4C167.02 103.98 162.44 84.69 150.11 75.16Z"
						id="iso-13"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M137.24 82.38C117.15 85.94 113.51 101.9 112.46 113.44"
						id="iso-13a"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M18.36 529.31C18.36 529.31 7.02 525.35 5.37 504.43C4.86 497.88 13.89 490.15 12.81 482.51C10.67 467.32 21.2 448.9 31.68 446.13C58.89 438.94 72.33 459.38 79.53 476.93C86.12 492.99 79.12 515.06 68.15 527.74C56.25 534.5 32.29 530.07 18.36 529.31Z"
						id="iso-18"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M98.89 414.82C91.72 434.68 71.23 446.39 48.57 441.68C28.93 437.59 16.41 426.82 11.8 400.23C7.47 375.3 4.28 345.65 48.9 345.64C91.28 345.62 114.44 371.79 98.89 414.82Z"
						id="iso-17"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M78.88 362.56C72.53 364.71 61.58 363.31 60.14 370.37C59.95 371.31 58.41 378.85 58.22 379.79C62.2 382.7 69.4 379.52 75.18 379.02C75.16 379.44 55.97 386.13 55.81 386.2C53.89 387.07 49.14 400.59 53.55 406.92C61.81 412.09 70.99 407.73 79.55 407.88C71.38 409.57 59.68 411.06 58.93 413.2C57.6 420.28 56.36 425.9 55.13 431.44C55.14 425.13 56.46 418.45 52.15 413.39C41.3 410.68 40.92 412.54 35.26 412.97C40.74 411.11 44.03 406.54 46.15 400.52C48.16 392.44 46.33 392.05 45.45 389.75C39.48 387.56 36.28 390.97 31.82 391.32C37.61 388.74 44.41 385.5 49.31 381.64C55.02 377.15 47.89 371.47 42.78 366.36C49.45 364.88 56.47 365.06 61.1 354.34C62.36 362.44 71.16 361.06 78.88 362.56Z"
						id="iso-17a"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M44.65 266.85C44.65 266.85 32.12 267.49 26.4 284.67C24.61 290.05 32.51 298.7 29.93 304.86C24.79 317.11 28.02 335.09 38.38 339.9C45.63 343.28 58.05 342.06 64.03 342.11C80.21 342.25 90.22 334.9 98.14 325.38C108.05 313.45 105.01 293.25 96.05 279.99C84.99 271.49 59.26 269.52 44.65 266.85Z"
						id="iso-16"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M56.94 494.91C60.48 492.65 67.62 496.05 72.83 497.1C71.34 496.21 59.47 489.15 57.98 488.26C52.76 480.91 55.48 474.74 55.2 467.8C51.42 468.58 48.21 465.25 45.07 461.37C45.68 465.45 50.5 471.58 45.68 473.01C44.93 472.73 41.17 471.36 34.4 468.9C41.23 473.96 45.02 476.77 45.78 477.33C45.78 477.33 48.56 483.47 46 482.51C43.43 481.56 31.11 484.1 31.11 484.1C31.11 484.1 43.66 483.26 48.24 488.28C52.82 493.3 52.75 496.35 53.21 499.76C53.68 503.17 52.89 506.57 54.97 509.07C56.8 511.28 63.26 512.72 63.26 512.72C59.78 506.61 57.11 500.6 56.94 494.91Z"
						id="b2DYah0Bi"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M124.86 144.48C120.94 136.65 109.98 133 101.25 133.32C91.45 133.67 81.91 140.28 75.4 147.74C69.45 154.55 63.37 185.34 71.92 187.91C90.03 193.36 104.78 206.01 116.86 192.75C127.48 181.1 131.22 157.16 124.86 144.48Z"
						id="iso-14"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M104.66 146.08C96.02 147.61 88.62 150.83 84.96 155.61C80.11 161.94 80.47 170.56 79.88 177.14"
						id="b6fpiYGql"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M69.15 299.11C72.26 301.81 79.33 298.09 84.34 297.03C82.86 298.01 70.96 305.83 69.47 306.81C63.82 315.15 65.77 322.32 64.82 330.31C61.33 329.32 57.97 333.06 54.63 337.45C55.61 332.77 60.76 325.83 56.36 324.06C55.62 324.35 51.94 325.83 45.32 328.49C52.25 322.84 56.11 319.7 56.88 319.07C56.88 319.07 60.11 312.08 57.6 313.11C55.08 314.14 43.72 310.87 43.72 310.87C43.72 310.87 55.47 312.18 60.29 306.52C65.1 300.86 65.34 297.34 66.11 293.42C66.89 289.51 66.48 285.57 68.69 282.74C70.63 280.25 76.87 278.76 76.87 278.76C72.98 285.71 69.87 292.56 69.15 299.11Z"
						id="b6rcDQpXhc"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M91.09 200.85C85.15 193.29 72.49 191.66 63.11 193.81C52.59 196.23 43.71 205.28 38.28 214.61C33.32 223.13 37.92 262.17 47.73 263.15C68.51 265.22 86.64 275.94 96.82 259.25C105.78 244.58 100.73 213.1 91.09 200.85Z"
						id="iso-15"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M47.29 239.85C48.2 237.5 47.09 235.21 47.29 233.03C47.82 226.98 48.23 221.74 51.73 217.98C53.09 216.51 54.68 215.22 56.42 214.05C61.11 210.89 66.87 208.65 72.13 206.52"
						id="b22znv61x"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M89.08 186.79C96.72 187.31 104.32 187.57 108.8 184.62C116.26 179.71 118.22 169.44 120.59 162.59"
						id="cyecxkyP8"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M65.93 256.06C86.29 257.43 88.65 244.61 92.44 233.66"
						id="a3AsQKojJ1"
					/>
					<text
						id="b16evo6f5C"
						x="214.21"
						y="10.52"
						fontSize="45"
						transform="matrix(1 0 0 1 10.526439084936285 162.96435359690972)"
					>
						<tspan
							x="214.21"
							dy="0em"
							dominantBaseline="text-before-edge"
						/>
					</text>
					<text
						id="a4WSJkkK4"
						x="214.21"
						y="10.52"
						fontSize="45"
						transform="matrix(1 0 0 1 27.682689084936285 178.58935359690972)"
					>
						<tspan
							x="214.21"
							dy="0em"
							dominantBaseline="text-before-edge"
						/>
					</text>
					<text
						id="dhJLWP0Rx"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -8.000000000000028 -30.303030303030482)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[11].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							8
						</tspan>
					</text>
					<text
						id="h484gZh3x"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -45.04545454545476 -19.8333333333336)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[12].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							7
						</tspan>
					</text>
					<text
						id="a5HTD7Ziun"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -76.03030303030349 16.257575757575637)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[13].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							6
						</tspan>
					</text>
					<text
						id="dPldy7HEx"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -110.04545454545521 61.819418583930684)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[14].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							5
						</tspan>
					</text>
					<text
						id="aagZSuMJr"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -132.90482954545524 122.24318752332468)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[15].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							4
						</tspan>
					</text>
					<text
						id="c3f2gAlj3"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -132.90482954545524 187.2124110081733)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[16].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							3
						</tspan>
					</text>
					<text
						id="fWwh13pJ"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -134.90482954545524 279.45436176574924)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[17].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							2
						</tspan>
					</text>
					<text
						id="iALQXea9Y"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -155.76420454545527 379.27207009908284)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[18].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							1
						</tspan>
					</text>
					<path
						style={{ cursor: "pointer" }}
						d="M293.44 8.55C299.61 -4.36 366.51 6.32 361.74 21.38C353.43 47.66 333.86 73.28 311.56 67.4C291.71 62.17 297.06 20.32 293.44 8.55Z"
						id="iso-21"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M308.96 19.39C320.52 14.5 332.61 16.21 345.55 26.43"
						id="h3ymJ8JsAJ"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M414.11 62.43C421.67 40.31 368.58 12.91 359.58 32.34C353.65 45.15 354.99 79.12 367.65 86.18C382 94.17 408.85 77.86 414.11 62.43Z"
						id="iso-22"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M373.13 40.87C381.95 41.5 389.21 40.72 399.62 53.98"
						id="e7zZFZz9XZ"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M409.49 75.16C417.1 69.28 429.78 70.79 438.34 75.16C447.96 80.07 454.37 91.01 457.36 101.39C460.09 110.86 455.31 132.99 445.56 131.55C424.89 128.49 403.5 139.07 397.69 120.4C392.59 103.98 397.16 84.69 409.49 75.16Z"
						id="iso-23"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M422.37 82.38C442.46 85.94 446.1 101.9 447.15 113.44"
						id="bX8HWOfji"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M541.25 529.31C541.25 529.31 552.59 525.35 554.23 504.43C554.75 497.88 545.72 490.15 546.8 482.51C548.94 467.32 538.41 448.9 527.93 446.13C500.72 438.94 487.28 459.38 480.08 476.93C473.49 492.99 480.49 515.06 491.46 527.74C503.35 534.5 527.32 530.07 541.25 529.31Z"
						id="iso-28"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M460.71 414.82C467.89 434.68 488.38 446.39 511.04 441.68C530.67 437.59 543.19 426.82 547.81 400.23C552.14 375.3 555.32 345.65 510.71 345.64C468.33 345.62 445.17 371.79 460.71 414.82Z"
						id="iso-27"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M480.73 362.56C487.08 364.71 498.03 363.31 499.47 370.37C499.66 371.31 501.19 378.85 501.38 379.79C497.4 382.7 490.21 379.52 484.42 379.02C484.45 379.44 503.64 386.13 503.8 386.2C505.71 387.07 510.47 400.59 506.05 406.92C497.79 412.09 488.62 407.73 480.06 407.88C488.23 409.57 499.93 411.06 500.68 413.2C502 420.28 503.24 425.9 504.47 431.44C504.47 425.13 503.15 418.45 507.45 413.39C518.31 410.68 518.69 412.54 524.35 412.97C518.87 411.11 515.58 406.54 513.45 400.52C511.45 392.44 513.28 392.05 514.16 389.75C520.13 387.56 523.32 390.97 527.79 391.32C522 388.74 515.2 385.5 510.29 381.64C504.59 377.15 511.72 371.47 516.82 366.36C510.16 364.88 503.13 365.06 498.51 354.34C497.25 362.44 488.45 361.06 480.73 362.56Z"
						id="lmVcyt8R"
					/>
					<text
						id="anXNzSK2j"
						x="214.21"
						y="10.52"
						fontSize="45"
						transform="matrix(-1 0 0 1 519.8434429734264 -14.916991393939833)"
					>
						<tspan
							x="214.21"
							dy="0em"
							dominantBaseline="text-before-edge"
						/>
					</text>
					<path
						style={{ cursor: "pointer" }}
						d="M514.96 266.85C514.96 266.85 527.49 267.49 533.2 284.67C534.99 290.05 527.1 298.7 529.68 304.86C534.82 317.11 531.59 335.09 521.23 339.9C513.97 343.28 501.56 342.06 495.58 342.11C479.4 342.25 469.38 334.9 461.47 325.38C451.56 313.45 454.6 293.25 463.55 279.99C474.61 271.49 500.35 269.52 514.96 266.85Z"
						id="iso-26"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M502.67 494.91C499.12 492.65 491.98 496.05 486.78 497.1C488.26 496.21 500.14 489.15 501.62 488.26C506.85 480.91 504.13 474.74 504.4 467.8C508.19 468.58 511.4 465.25 514.53 461.37C513.93 465.45 509.1 471.58 513.93 473.01C514.68 472.73 518.44 471.36 525.21 468.9C518.38 473.96 514.59 476.77 513.83 477.33C513.83 477.33 511.04 483.47 513.61 482.51C516.18 481.56 528.5 484.1 528.5 484.1C528.5 484.1 515.94 483.26 511.36 488.28C506.78 493.3 506.86 496.35 506.39 499.76C505.93 503.17 506.72 506.57 504.64 509.07C502.81 511.28 496.35 512.72 496.35 512.72C499.82 506.61 502.5 500.6 502.67 494.91Z"
						id="bsHecJRYc"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M434.74 144.48C438.66 136.65 449.63 133 458.35 133.32C468.15 133.67 477.69 140.28 484.21 147.74C490.16 154.55 496.24 185.34 487.69 187.91C469.58 193.36 454.82 206.01 442.74 192.75C432.12 181.1 428.39 157.16 434.74 144.48Z"
						id="iso-24"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M454.95 146.08C463.59 147.61 470.99 150.83 474.64 155.61C479.49 161.94 479.13 170.56 479.73 177.14"
						id="d6p4ZsEBwV"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M490.46 299.11C487.34 301.81 480.27 298.09 475.26 297.03C476.75 298.01 488.65 305.83 490.13 306.81C495.79 315.15 493.84 322.32 494.78 330.31C498.27 329.32 501.63 333.06 504.97 337.45C504 332.77 498.84 325.83 503.25 324.06C503.98 324.35 507.67 325.83 514.29 328.49C507.35 322.84 503.5 319.7 502.72 319.07C502.72 319.07 499.49 312.08 502.01 313.11C504.52 314.14 515.89 310.87 515.89 310.87C515.89 310.87 504.13 312.18 499.32 306.52C494.5 300.86 494.27 297.34 493.49 293.42C492.72 289.51 493.12 285.57 490.92 282.74C488.97 280.25 482.74 278.76 482.74 278.76C486.62 285.71 489.74 292.56 490.46 299.11Z"
						id="aLBv0ngyf"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M468.51 200.85C474.46 193.29 487.12 191.66 496.49 193.81C507.02 196.23 515.9 205.28 521.33 214.61C526.28 223.13 521.68 262.17 511.88 263.15C491.09 265.22 472.97 275.94 462.78 259.25C453.83 244.58 458.88 213.1 468.51 200.85Z"
						id="iso-25"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M512.32 239.85C511.4 237.5 512.51 235.21 512.32 233.03C511.78 226.98 511.38 221.74 507.88 217.98C506.51 216.51 504.92 215.22 503.19 214.05C498.49 210.89 492.74 208.65 487.48 206.52"
						id="a1IjZsIm8S"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M470.52 186.79C462.89 187.31 455.28 187.57 450.81 184.62C443.35 179.71 441.38 169.44 439.01 162.59"
						id="b2b6VhQYX9"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M493.67 256.06C473.32 257.43 470.95 244.61 467.16 233.66"
						id="b2JgD7E2Kq"
					/>
					<text
						id="b1gODCfJB5"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 62.5303030303032 -33.3333333333336)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[21].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							9
						</tspan>
					</text>
					<text
						id="a2KwBh9N1C"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 98.21212121212167 -19.8333333333336)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[22].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							10
						</tspan>
					</text>
					<text
						id="avSr25PQ8"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 130.03030303030368 16.257575757575637)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[23].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							11
						</tspan>
					</text>
					<text
						id="b1IAgvlN7L"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 162.49083356665588 61.819418583930684)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[24].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							12
						</tspan>
					</text>
					<text
						id="a5jdHsmSg"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 189.14062500000085 122.24318752332468)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[25].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							13
						</tspan>
					</text>
					<text
						id="eEJTk9OPg"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 185.3502085666559 187.2124110081733)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[26].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							14
						</tspan>
					</text>
					<text
						id="a1kI1wu28"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 185.35020856665585 279.45436176574924)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[27].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							15
						</tspan>
					</text>
					<text
						id="f10grZcqP0"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 208.20958356665594 379.27207009908284)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[28].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							16
						</tspan>
					</text>
					<path
						style={{ cursor: "pointer" }}
						d="M264.9 1047.24C261.44 1058.52 216.61 1052.18 219.04 1039.13C223.27 1016.34 235 993.66 250.05 997.75C263.46 1001.39 261.93 1037.34 264.9 1047.24Z"
						id="iso-41"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M254.1 1038.64C246.68 1043.28 238.59 1042.33 229.52 1034.14"
						id="a2Ot1hj5Ti"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M161.38 1007.25C155.47 1029.79 207.41 1053.97 214.85 1034.04C219.75 1020.91 216.56 987.08 204.13 980.78C190.07 973.66 165.51 991.54 161.38 1007.25Z"
						id="iso-42"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M201.5 1026.33C193.09 1026.23 186.25 1027.45 175.62 1014.83"
						id="c3OkjuGmoe"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M167.04 994.77C160.15 1001.09 148.04 1000.34 139.66 996.49C130.25 992.16 123.55 981.62 120.13 971.44C117 962.15 120.28 939.77 129.62 940.63C149.4 942.46 169.12 930.62 175.68 948.91C181.46 964.99 178.21 984.52 167.04 994.77Z"
						id="iso-43"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M154.41 988.33C135.14 985.97 130.78 970.26 129.13 958.8"
						id="c1DvhakQel"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M16.27 549.27C16.27 549.27 5.73 553.9 5.35 574.88C5.23 581.45 14.25 588.63 13.65 596.32C12.48 611.61 23.52 629.37 33.62 631.51C59.86 637.07 71.46 615.86 77.3 597.91C82.64 581.49 74.74 559.88 63.62 547.87C51.94 541.83 29.45 547.69 16.27 549.27Z"
						id="iso-48"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M99.19 658.77C91.26 639.36 71.15 628.89 49.9 634.95C31.5 640.2 20.23 651.7 17.35 678.51C14.66 703.65 13.31 733.44 55.66 730.8C95.88 728.29 116.38 700.79 99.19 658.77Z"
						id="iso-47"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M83.15 712.12C77.01 710.36 66.69 712.41 64.93 705.44C64.69 704.51 62.81 697.08 62.57 696.15C66.19 693.01 73.2 695.75 78.72 695.91C78.67 695.49 60.07 689.96 59.92 689.9C58.05 689.15 52.78 675.93 56.61 669.35C64.15 663.69 73.11 667.5 81.22 666.85C73.37 665.64 62.18 664.85 61.35 662.76C59.69 655.77 58.2 650.23 56.71 644.78C57.08 651.07 58.71 657.66 54.91 662.98C44.76 666.32 44.29 664.49 38.9 664.4C44.2 665.92 47.58 670.3 49.95 676.18C52.3 684.13 50.59 684.63 49.88 686.97C44.34 689.51 41.12 686.3 36.86 686.22C42.5 688.44 49.14 691.27 54.01 694.84C59.68 698.98 53.24 705.07 48.68 710.48C55.09 711.56 61.75 710.96 66.74 721.38C67.48 713.23 75.91 714.07 83.15 712.12Z"
						id="c18sfWQXw1"
					/>
					<text
						id="b2iKkN8Sl1"
						x="214.21"
						y="10.52"
						fontSize="44"
						transform="matrix(0.9980376052223248 -0.0626173982379266 -0.05663394169426829 -0.9983950103281617 56.93330868565021 1091.9163454821464)"
					>
						<tspan
							x="214.21"
							dy="0em"
							dominantBaseline="text-before-edge"
						/>
					</text>
					<path
						style={{ cursor: "pointer" }}
						d="M56.08 809.7C56.08 809.7 44.16 809.8 37.76 792.99C35.75 787.73 42.76 778.63 39.96 772.64C34.39 760.71 36.44 742.58 45.99 737.15C52.69 733.35 64.54 733.83 70.22 733.42C85.56 732.31 95.49 739.06 103.54 748.09C113.62 759.4 111.88 779.75 104.13 793.52C94.12 802.67 69.8 806.16 56.08 809.7Z"
						id="iso-46"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M54.84 581.31C58.33 583.35 64.91 579.54 69.79 578.18C68.44 579.16 57.56 586.92 56.21 587.89C51.66 595.54 54.59 601.53 54.72 608.47C51.09 607.93 48.23 611.44 45.47 615.5C45.82 611.4 50.05 604.99 45.39 603.85C44.69 604.17 41.2 605.76 34.92 608.62C41.11 603.16 44.55 600.13 45.24 599.52C45.24 599.52 47.53 593.24 45.15 594.34C42.77 595.44 30.93 593.64 30.93 593.64C30.93 593.64 42.89 593.73 46.96 588.44C51.02 583.16 50.78 580.12 51.03 576.69C51.27 573.26 50.33 569.91 52.16 567.29C53.78 564.98 59.83 563.16 59.83 563.16C56.87 569.47 54.67 575.62 54.84 581.31Z"
						id="b7ARVWKg9"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M35.25 624.78C31.16 619.74 27.5 608.86 24.26 592.15L18.31 578.44C19.48 568.55 20.23 562.9 20.55 561.49"
						id="kjsO4lDF"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M139.15 927.08C135.87 935.12 125.67 939.42 117.37 939.62C108.05 939.85 98.62 933.83 92.01 926.77C85.98 920.33 78.47 889.95 86.44 886.88C103.32 880.35 116.61 866.85 128.82 879.36C139.56 890.37 144.46 914.04 139.15 927.08Z"
						id="iso-44"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M119.88 926.69C111.59 925.67 104.39 922.9 100.65 918.34C95.69 912.31 95.54 903.69 94.6 897.16"
						id="c2SUh81nX8"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M77.51 776.04C80.31 773.15 87.24 776.45 92.05 777.21C90.59 776.32 78.85 769.22 77.38 768.33C71.54 760.35 72.99 753.07 71.64 745.15C68.38 746.35 64.98 742.81 61.56 738.63C62.75 743.24 68.04 749.86 63.96 751.9C63.24 751.65 59.67 750.39 53.23 748.13C60.13 753.36 63.97 756.26 64.74 756.84C64.74 756.84 68.2 763.63 65.76 762.75C63.31 761.87 52.71 765.81 52.71 765.81C52.71 765.81 63.79 763.81 68.68 769.17C73.58 774.54 74 778.03 74.95 781.89C75.91 785.76 75.75 789.71 78 792.41C79.99 794.78 85.99 795.89 85.99 795.89C81.91 789.18 78.56 782.53 77.51 776.04Z"
						id="b3NaX9ixLx"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M103.9 872.82C98.69 880.72 86.77 883.09 77.75 881.51C67.62 879.73 58.68 871.22 53 862.23C47.81 854.02 49.96 814.77 59.22 813.21C78.83 809.91 95.43 798.13 106.04 814.18C115.37 828.29 112.36 860.02 103.9 872.82Z"
						id="iso-45"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M60.12 836.49C61.12 838.79 60.2 841.14 60.5 843.3C61.36 849.31 62.04 854.52 65.57 858.06C66.95 859.44 68.53 860.64 70.25 861.71C74.88 864.58 80.47 866.47 85.58 868.29"
						id="c9QkCsAMn"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M102.79 886.97C110.01 886 117.22 885.28 121.63 887.96C128.99 892.42 131.44 902.56 134.07 909.25"
						id="d38q1jr7XL"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M76.9 819.2C96.14 816.63 99.11 829.28 103.33 839.99"
						id="amh0k6iSv"
					/>
					<text
						id="b85Z9biXKR"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -5.500000000000028 869.8745265151553)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[41].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							25
						</tspan>
					</text>
					<text
						id="c1DY6ILtkz"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -39.76562500000003 855.2745265151555)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[42].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							26
						</tspan>
					</text>
					<text
						id="b7Um5lGNA6"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -67.65482954545479 820.8849431818218)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[43].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							27
						</tspan>
					</text>
					<text
						id="bFYSV3ojY"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -101.11576704545519 770.7026515151548)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[44].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							28
						</tspan>
					</text>
					<text
						id="a58joFtV32"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -125.48784120066395 713.8795190562305)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[45].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							29
						</tspan>
					</text>
					<text
						id="d1FL8DxoUa"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -127.01010687857391 647.545712238048)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[46].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							30
						</tspan>
					</text>
					<text
						id="c1WvdIbIzw"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -132.90482954545524 552.0747842077441)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[47].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							31
						</tspan>
					</text>
					<text
						id="g1ie3fhzhA"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 -159.776903700664 465.24931072289553)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[48].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							32
						</tspan>
					</text>
					<path
						style={{ cursor: "pointer" }}
						d="M294.7 1047.24C298.16 1058.52 342.99 1052.18 340.57 1039.13C336.33 1016.34 324.61 993.66 309.55 997.75C296.15 1001.39 297.67 1037.34 294.7 1047.24Z"
						id="iso-31"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M305.51 1038.64C312.93 1043.28 321.02 1042.33 330.08 1034.14"
						id="cjuFfUWr"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M398.22 1007.25C404.14 1029.79 352.2 1053.97 344.76 1034.04C339.86 1020.91 343.05 987.08 355.47 980.78C369.54 973.66 394.1 991.54 398.22 1007.25Z"
						id="iso-32"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M358.1 1026.33C366.51 1026.23 373.35 1027.45 383.99 1014.83"
						id="ahVnr1hTO"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M392.57 994.77C399.46 1001.09 411.57 1000.34 419.95 996.49C429.36 992.16 436.06 981.62 439.48 971.44C442.61 962.15 439.32 939.77 429.99 940.63C410.2 942.46 390.49 930.62 383.92 948.91C378.15 964.99 381.4 984.52 392.57 994.77Z"
						id="iso-33"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M405.19 988.33C424.46 985.97 428.82 970.26 430.47 958.8"
						id="d2sFISoAcr"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M543.34 549.27C543.34 549.27 553.87 553.9 554.25 574.88C554.37 581.45 545.36 588.63 545.95 596.32C547.13 611.61 536.09 629.37 525.98 631.51C499.75 637.07 488.15 615.86 482.31 597.91C476.97 581.49 484.86 559.88 495.99 547.87C507.66 541.83 530.16 547.69 543.34 549.27Z"
						id="iso-38"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M460.41 658.77C468.35 639.36 488.46 628.89 509.7 634.95C528.1 640.2 539.38 651.7 542.26 678.51C544.95 703.65 546.3 733.44 503.95 730.8C463.72 728.29 443.22 700.79 460.41 658.77Z"
						id="iso-37"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M476.45 712.12C482.6 710.36 492.92 712.41 494.68 705.44C494.92 704.51 496.8 697.08 497.03 696.15C493.42 693.01 486.41 695.75 480.89 695.91C480.94 695.49 499.53 689.96 499.69 689.9C501.56 689.15 506.83 675.93 503 669.35C495.45 663.69 486.5 667.5 478.38 666.85C486.23 665.64 497.42 664.85 498.25 662.76C499.91 655.77 501.41 650.23 502.89 644.78C502.53 651.07 500.89 657.66 504.7 662.98C514.85 666.32 515.31 664.49 520.71 664.4C515.4 665.92 512.02 670.3 509.66 676.18C507.3 684.13 509.02 684.63 509.72 686.97C515.27 689.51 518.49 686.3 522.75 686.22C517.1 688.44 510.47 691.27 505.59 694.84C499.92 698.98 506.37 705.07 510.92 710.48C504.52 711.56 497.86 710.96 492.86 721.38C492.13 713.23 483.7 714.07 476.45 712.12Z"
						id="b5JyusjzlT"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M503.52 809.7C503.52 809.7 515.45 809.8 521.85 792.99C523.85 787.73 516.85 778.63 519.65 772.64C525.22 760.71 523.17 742.58 513.61 737.15C506.92 733.35 495.06 733.83 489.39 733.42C474.04 732.31 464.12 739.06 456.07 748.09C445.98 759.4 447.72 779.75 455.48 793.52C465.49 802.67 489.81 806.16 503.52 809.7Z"
						id="iso-36"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M504.77 581.31C501.28 583.35 494.69 579.54 489.81 578.18C491.17 579.16 502.04 586.92 503.4 587.89C507.94 595.54 505.02 601.53 504.88 608.47C508.52 607.93 511.38 611.44 514.13 615.5C513.79 611.4 509.56 604.99 514.22 603.85C514.92 604.17 518.41 605.76 524.69 608.62C518.5 603.16 515.05 600.13 514.37 599.52C514.37 599.52 512.07 593.24 514.45 594.34C516.84 595.44 528.68 593.64 528.68 593.64C528.68 593.64 516.71 593.73 512.65 588.44C508.59 583.16 508.83 580.12 508.58 576.69C508.33 573.26 509.27 569.91 507.44 567.29C505.83 564.98 499.78 563.16 499.78 563.16C502.73 569.47 504.93 575.62 504.77 581.31Z"
						id="a9wXxhEQy"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M420.46 927.08C423.73 935.12 433.93 939.42 442.23 939.62C451.55 939.85 460.98 933.83 467.59 926.77C473.63 920.33 481.14 889.95 473.17 886.88C456.29 880.35 443 866.85 430.78 879.36C420.04 890.37 415.14 914.04 420.46 927.08Z"
						id="iso-34"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M439.73 926.69C448.01 925.67 455.22 922.9 458.96 918.34C463.92 912.31 464.06 903.69 465 897.16"
						id="f1nJy2rCGI"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M482.1 776.04C479.29 773.15 472.37 776.45 467.55 777.21C469.02 776.32 480.76 769.22 482.22 768.33C488.06 760.35 486.62 753.07 487.97 745.15C491.22 746.35 494.62 742.81 498.04 738.63C496.85 743.24 491.57 749.86 495.65 751.9C496.36 751.65 499.94 750.39 506.38 748.13C499.47 753.36 495.64 756.26 494.87 756.84C494.87 756.84 491.4 763.63 493.85 762.75C496.29 761.87 506.9 765.81 506.9 765.81C506.9 765.81 495.81 763.81 490.92 769.17C486.03 774.54 485.61 778.03 484.65 781.89C483.7 785.76 483.86 789.71 481.6 792.41C479.62 794.78 473.61 795.89 473.61 795.89C477.69 789.18 481.04 782.53 482.1 776.04Z"
						id="m211qMeGpL"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M455.7 872.82C460.92 880.72 472.84 883.09 481.86 881.51C491.99 879.73 500.93 871.22 506.61 862.23C511.8 854.02 509.64 814.77 500.39 813.21C480.78 809.91 464.18 798.13 453.57 814.18C444.24 828.29 447.25 860.02 455.7 872.82Z"
						id="iso-35"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M499.49 836.49C498.48 838.79 499.41 841.14 499.1 843.3C498.25 849.31 497.57 854.52 494.03 858.06C492.65 859.44 491.07 860.64 489.36 861.71C484.73 864.58 479.13 866.47 474.02 868.29"
						id="bHt0uYEvE"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M456.81 886.97C449.6 886 442.39 885.28 437.98 887.96C430.62 892.42 428.17 902.56 425.53 909.25"
						id="aaB5NMNJEr"
					/>
					<path
						style={{ cursor: "pointer" }}
						d="M482.71 819.2C463.46 816.63 460.49 829.28 456.28 839.99"
						id="awAtPqnox"
					/>
					<text
						id="b1BVUVOWBq"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 57.80000000000004 869.8745265151554)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[31].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							24
						</tspan>
					</text>
					<text
						id="a3t972Cvsg"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 95.73437500000031 855.2745265151555)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[32].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							23
						</tspan>
					</text>
					<text
						id="i4mHUxK2re"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 152.8896780303037 770.7026515151549)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[34].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							22
						</tspan>
					</text>
					<text
						id="d3EsTPegQ"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 121.07149621212173 820.8849431818218)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[33].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							21
						</tspan>
					</text>
					<text
						id="b2ApfidLEf"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 175.7490530303037 713.8795190562305)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[35].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							20
						</tspan>
					</text>
					<text
						id="b2aRoIXnu9"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 179.9811271272621 644.030087238048)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[36].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							19
						</tspan>
					</text>
					<text
						id="a1E40eZIMw"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 187.17874053030374 552.0747842077441)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[37].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							18
						</tspan>
					</text>
					<text
						id="b18Xayl0Ve"
						x="241.89"
						y="100.29"
						fontSize="20"
						transform="matrix(1 0 0 1 212.00000000000088 465.24931072289553)"
					>
						<tspan
							x="241.89"
							dy="0em"
							dominantBaseline="text-before-edge"
							{...(this.props.teeth[38].notes.length
								? { stroke: "#212121" }
								: {})}
						>
							17
						</tspan>
					</text>
				</defs>
				<g className="main">
					<g className="q1">
						<g className="1" onClick={() => this.props.onClick(11)}>
							<g>
								<use
									xlinkHref="#iso-11"
									style={{zIndex: 100}} fill={conditionToColor(this.props.teeth[11].condition)}
								/>
								<g>
									<use
										xlinkHref="#iso-11"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#iso-11a"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#iso-11a"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="2" onClick={() => this.props.onClick(12)}>
							<g>
								<use
									xlinkHref="#iso-12"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[12].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-12"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#iso-12a"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#iso-12a"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="3" onClick={() => this.props.onClick(13)}>
							<g>
								<use
									xlinkHref="#iso-13"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[13].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-13"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#iso-13a"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#iso-13a"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="4" onClick={() => this.props.onClick(14)}>
							<g>
								<use
									xlinkHref="#iso-14"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[14].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-14"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b6fpiYGql"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#b6fpiYGql"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#cyecxkyP8"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#cyecxkyP8"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="5" onClick={() => this.props.onClick(15)}>
							<g>
								<use
									xlinkHref="#iso-15"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[15].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-15"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b22znv61x"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#b22znv61x"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#a3AsQKojJ1"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#a3AsQKojJ1"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="6" onClick={() => this.props.onClick(16)}>
							<g>
								<use
									xlinkHref="#iso-16"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[16].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-16"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b6rcDQpXhc"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#b6rcDQpXhc"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="7" onClick={() => this.props.onClick(17)}>
							<g>
								<use
									xlinkHref="#iso-17"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[17].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-17"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#iso-17a"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#iso-17a"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="8" onClick={() => this.props.onClick(18)}>
							<g>
								<use
									xlinkHref="#iso-18"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[18].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-18"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b2DYah0Bi"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#b2DYah0Bi"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="text">
							<g id="e1BKNeURVa">
								<use
									xlinkHref="#dhJLWP0Rx"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="c11nH75JKG">
								<use
									xlinkHref="#h484gZh3x"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="apGn9cSxF">
								<use
									xlinkHref="#a5HTD7Ziun"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="bjZ1YSxTN">
								<use
									xlinkHref="#dPldy7HEx"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="fg2EsfBeL">
								<use
									xlinkHref="#aagZSuMJr"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="a5Xmbxqft">
								<use
									xlinkHref="#c3f2gAlj3"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="a3IMKLYnOx">
								<use
									xlinkHref="#fWwh13pJ"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="c31CWrtXNW">
								<use
									xlinkHref="#iALQXea9Y"
									opacity="1"
									fill="#000"
								/>
							</g>
						</g>
					</g>
					<g className="q2">
						<g className="1" onClick={() => this.props.onClick(21)}>
							<g>
								<use
									xlinkHref="#iso-21"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[21].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-21"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#h3ymJ8JsAJ"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#h3ymJ8JsAJ"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="2" onClick={() => this.props.onClick(22)}>
							<g>
								<use
									xlinkHref="#iso-22"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[22].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-22"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#e7zZFZz9XZ"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#e7zZFZz9XZ"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="3" onClick={() => this.props.onClick(23)}>
							<g>
								<use
									xlinkHref="#iso-23"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[23].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-23"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#bX8HWOfji"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#bX8HWOfji"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="4" onClick={() => this.props.onClick(24)}>
							<g>
								<use
									xlinkHref="#iso-24"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[24].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-24"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#d6p4ZsEBwV"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#d6p4ZsEBwV"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b2b6VhQYX9"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#b2b6VhQYX9"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="5" onClick={() => this.props.onClick(25)}>
							<g>
								<use
									xlinkHref="#iso-25"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[25].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-25"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#a1IjZsIm8S"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#a1IjZsIm8S"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b2JgD7E2Kq"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#b2JgD7E2Kq"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="6" onClick={() => this.props.onClick(26)}>
							<g>
								<use
									xlinkHref="#iso-26"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[26].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-26"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#aLBv0ngyf"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#aLBv0ngyf"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="7" onClick={() => this.props.onClick(27)}>
							<g>
								<use
									xlinkHref="#iso-27"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[27].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-27"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#lmVcyt8R"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#lmVcyt8R"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="8" onClick={() => this.props.onClick(28)}>
							<g>
								<use
									xlinkHref="#iso-28"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[28].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-28"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#bsHecJRYc"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#bsHecJRYc"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="text">
							<g id="c2vG1vlZh4">
								<use
									xlinkHref="#b1gODCfJB5"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="a1nYN9cpt">
								<use
									xlinkHref="#a2KwBh9N1C"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="bAKpE8e15">
								<use
									xlinkHref="#avSr25PQ8"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="f13C0Z9htE">
								<use
									xlinkHref="#b1IAgvlN7L"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="h2OfTRUQ6B">
								<use
									xlinkHref="#a5jdHsmSg"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="b4tUNqNk6T">
								<use
									xlinkHref="#eEJTk9OPg"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="clBT5njbz">
								<use
									xlinkHref="#a1kI1wu28"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="aG1IO93Cx">
								<use
									xlinkHref="#f10grZcqP0"
									opacity="1"
									fill="#000"
								/>
							</g>
						</g>
					</g>
					<g className="q3">
						<g className="1" onClick={() => this.props.onClick(31)}>
							<g>
								<use
									xlinkHref="#iso-31"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[31].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-31"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#cjuFfUWr"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#cjuFfUWr"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="2" onClick={() => this.props.onClick(32)}>
							<g>
								<use
									xlinkHref="#iso-32"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[32].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-32"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#ahVnr1hTO"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#ahVnr1hTO"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="3" onClick={() => this.props.onClick(33)}>
							<g>
								<use
									xlinkHref="#iso-33"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[33].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-33"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#d2sFISoAcr"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#d2sFISoAcr"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="4" onClick={() => this.props.onClick(34)}>
							<g>
								<use
									xlinkHref="#iso-34"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[34].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-34"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#f1nJy2rCGI"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#f1nJy2rCGI"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#aaB5NMNJEr"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#aaB5NMNJEr"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="5" onClick={() => this.props.onClick(35)}>
							<g>
								<use
									xlinkHref="#iso-35"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[35].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-35"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#bHt0uYEvE"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#bHt0uYEvE"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#awAtPqnox"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#awAtPqnox"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="6" onClick={() => this.props.onClick(36)}>
							<g>
								<use
									xlinkHref="#iso-36"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[36].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-36"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#m211qMeGpL"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#m211qMeGpL"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="7" onClick={() => this.props.onClick(37)}>
							<g>
								<use
									xlinkHref="#iso-37"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[37].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-37"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b5JyusjzlT"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#b5JyusjzlT"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="8" onClick={() => this.props.onClick(38)}>
							<g>
								<use
									xlinkHref="#iso-38"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[38].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-38"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#a9wXxhEQy"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#a9wXxhEQy"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="text">
							<g id="a8me8h3BSZ">
								<use
									xlinkHref="#b1BVUVOWBq"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="aXE5ZGRZF">
								<use
									xlinkHref="#a3t972Cvsg"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="c3IdvmfULY">
								<use
									xlinkHref="#i4mHUxK2re"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="d4igiagCc0">
								<use
									xlinkHref="#d3EsTPegQ"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="b4CCaq9LOV">
								<use
									xlinkHref="#b2ApfidLEf"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="ako4Nkrak">
								<use
									xlinkHref="#b2aRoIXnu9"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="eBV6uRJmu">
								<use
									xlinkHref="#a1E40eZIMw"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="aQUtEqY2g">
								<use
									xlinkHref="#b18Xayl0Ve"
									opacity="1"
									fill="#000"
								/>
							</g>
						</g>
					</g>
					<g className="q4">
						<g className="1" onClick={() => this.props.onClick(41)}>
							<g>
								<use
									xlinkHref="#iso-41"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[41].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-41"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#a2Ot1hj5Ti"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#a2Ot1hj5Ti"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="2" onClick={() => this.props.onClick(42)}>
							<g>
								<use
									xlinkHref="#iso-42"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[42].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-42"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#c3OkjuGmoe"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#c3OkjuGmoe"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="3" onClick={() => this.props.onClick(43)}>
							<g>
								<use
									xlinkHref="#iso-43"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[43].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-43"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#c1DvhakQel"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#c1DvhakQel"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="4" onClick={() => this.props.onClick(44)}>
							<g>
								<use
									xlinkHref="#iso-44"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[44].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-44"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>

							<g>
								<use
									xlinkHref="#c2SUh81nX8"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#c2SUh81nX8"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#d38q1jr7XL"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#d38q1jr7XL"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="5" onClick={() => this.props.onClick(45)}>
							<g>
								<use
									xlinkHref="#iso-45"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[45].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-45"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#c9QkCsAMn"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#c9QkCsAMn"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#amh0k6iSv"
									opacity="1"
									fillOpacity="0"
								/>
								<g>
									<use
										xlinkHref="#amh0k6iSv"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
						</g>
						<g className="6" onClick={() => this.props.onClick(46)}>
							<g>
								<use
									xlinkHref="#iso-46"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[46].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-46"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b3NaX9ixLx"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#b3NaX9ixLx"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="7" onClick={() => this.props.onClick(47)}>
							<g>
								<use
									xlinkHref="#iso-47"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[47].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-47"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#c18sfWQXw1"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#c18sfWQXw1"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="8" onClick={() => this.props.onClick(48)}>
							<g>
								<use
									xlinkHref="#iso-48"
									style={{zIndex: 100}} fill={conditionToColor(
										this.props.teeth[48].condition
									)}
								/>
								<g>
									<use
										xlinkHref="#iso-48"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="10"
									/>
								</g>
							</g>
							<g>
								<use
									xlinkHref="#b7ARVWKg9"
									opacity="1"
									fill="#000"
								/>
								<g>
									<use
										xlinkHref="#b7ARVWKg9"
										fillOpacity="0"
										stroke="#000"
										strokeWidth="0"
									/>
								</g>
							</g>
						</g>
						<g className="text">
							<g id="esxiVjmkn">
								<use
									xlinkHref="#b85Z9biXKR"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="a5VexlPOx">
								<use
									xlinkHref="#c1DY6ILtkz"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="aaP8d9N3o">
								<use
									xlinkHref="#b7Um5lGNA6"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="adSaYX4L8">
								<use
									xlinkHref="#bFYSV3ojY"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="f5VTtmANks">
								<use
									xlinkHref="#a58joFtV32"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="akb2LDStY">
								<use
									xlinkHref="#d1FL8DxoUa"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="iGZzsgY86">
								<use
									xlinkHref="#c1WvdIbIzw"
									opacity="1"
									fill="#000"
								/>
							</g>
							<g id="b43283rfI4">
								<use
									xlinkHref="#g1ie3fhzhA"
									opacity="1"
									fill="#000"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg> */}
			</>
		);
	}
}

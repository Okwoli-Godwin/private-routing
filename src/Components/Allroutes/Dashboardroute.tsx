import React from "react";
import DashBoardHome from "../Dashboard/Dashboardhome";
import { useNavigate, useRoutes } from "react-router-dom";
import DashHeader from "../Dashboard/Dashheader";
import styled from "styled-components";
import PrivateRoutes from "../PrivateRoutes";

const DashBoardRoutes = () => {
	let element = useRoutes([
		{
			path: "/dashboard",
			element: <DashBoardHome />,
		},
	]);
	return (
		<div>
			<DashHeader />
			<Wrapper>{element}</Wrapper>
		</div>
	);
};

export default DashBoardRoutes;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
// import { useNavigation, useNavigationState } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import HomeIcon from "../../assets/svg/home-icon";
// import ContactUsIcon from "../../assets/svg/contact-us-icon";
// import InquiriesIcon from "../../assets/svg/inquiries-icon";
// import UpdateIcon from "../../assets/svg/update-icon";

// const useTabBar = () => {
// 	const tabs = [
// 		{
// 			screen: "Home",
// 			label:"Home",
// 			Icon: HomeIcon
// 		},
// 		{
// 			screen: "Updates",
// 			label: "Updates",
// 			Icon: UpdateIcon
// 		},
// 		{
// 			screen: "Inquiries",
// 			label: "Inquiries",
// 			Icon: InquiriesIcon
// 		},
// 		{
// 			screen: "ContactUs",
// 			label: "Contact Us",
// 			Icon: ContactUsIcon
// 		},
		
// 	];

// 	type activeTabType = { screen: string, label: string, Icon: React.ElementType }

// 	const [activeTab, setActiveTab] = useState<activeTabType>(tabs[0]);
// 	const routes = useNavigationState(state => state.routes);
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const navigation = useNavigation<any>();
// 	const onRequestTabChange = (item: activeTabType) => {
// 		navigation.getParent('BottomTabNavigator')
// 		navigation.navigate("BottomTabNavigator", { screen: item.screen, params: {} });
// 	};


// 	const onNavigationStateChange = () => {
// 		for (const route of routes) {
// 			if (route.name === "BottomTabNavigator") {
// 				setActiveTab(
// 					tabs[route?.state?.index || 0],
// 				);
// 				break;
// 			}
// 		}
// 	};

// 	useEffect(() => {
// 		onNavigationStateChange();
// 	}, [routes]);

// 	return {
// 		tabs,
// 		activeTab,
// 		onRequestTabChange,
// 	};
// };

// export default useTabBar;
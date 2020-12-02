/* 
    Component Config Objects
*/

/*
    Icons 
*/
import { 
    RiDashboardFill, 
    RiSunLine, 
    RiCalendarTodoFill, 
    RiFileSettingsLine 
} from "react-icons/ri"

// Menu Links
const linkStyle = {
    color: 'white',
    marginLeft: '1rem'
}

export const MENU_LINKS = [
    {
        to: "/dashboard",
        icon: <RiDashboardFill style = { linkStyle } size = { 24 } />,
        label: "Dashboard"
    },
    {
        to: "/climate",
        icon: <RiSunLine style = { linkStyle } color = "white" size = { 24 } />,
        label: "Climate"
    },
    {
        to: "/calendar",
        icon: <RiCalendarTodoFill style = { linkStyle } color = "white" size = { 24 }/>,
        label: "Calendar"
    },
    {
        to: "/settings",
        icon: <RiFileSettingsLine style = { linkStyle } color = "white" size = { 24 }/>,
        label: "Settings"
    },
]
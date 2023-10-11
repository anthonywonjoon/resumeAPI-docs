import React, {useState} from 'react';
import {
    Button,
    Col,
    Container,
    Navbar,
    NavItem,
    NavLink,
    Row
} from 'react-bootstrap';
import './sidebar-style.css';

const ToggleMenu = ({ buttonText, menuItems}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <Button
                variant="link"
                className="sidebar-button"
                onClick={toggleMenu}
            >
                {buttonText}
            </Button>
            {isMenuOpen && (
                <div className="menu-content">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="sidebar-menu-list">
                                <a href={item.link} className="sidebar-menu-second">{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

const Sidebar = () => {
    const menuData = [
        {
            buttonText: "Biography",
            menuItems: [
                { text: "Get All", link: "/bio/all" },
                { text: "Get Name", link: "/bio/name" },
                { text: "Get Location", link: "/bio/location" },
                { text: "Get Phone", link: "/bio/phone" },
                { text: "Get Email", link: "/bio/email" },
                { text: "Get Linkedin", link: "/bio/linkedin" },
                { text: "Get Github", link: "/bio/github" }
            ],
        },
        {
            buttonText: "Education",
            menuItems: [
                { text: "Get All", link: "/edu/all" },
                { text: "Get Grad Date", link: "/edu/grad" },
                { text: "Get University", link: "/edu/name" },
                { text: "Get Degree Type", link: "/edu/degree" },
                { text: "Get Majors", link: "/edu/majors" },
                { text: "Get Minors", link: "/edu/minors" },
                { text: "Get Courses", link: "/edu/courses" }
            ],
        },
        {
            buttonText: "Experience",
            menuItems: [
                { text: "Get All", link: "/exp/all" },
                { text: "Get Specific Experience", link: "/exp/specific" },
                { text: "Get Company", link: "/exp/company" },
                { text: "Get Position", link: "/exp/position" },
                { text: "Get Start Date", link: "/exp/start" },
                { text: "Get End Date", link: "/exp/end" },
                { text: "Get Description", link: "/exp/description" },
            ]
        },
        {
            buttonText: "Projects",
            menuItems: [
                { text: "Get All", link: "/proj/all" },
                { text: "Get Specific Project", link: "/proj/specific" },
                { text: "Get Name", link: "/proj/name" },
                { text: "Get Github Repo", link: "/proj/github" },
                { text: "Get Description", link: "/proj/description" },
                { text: "Get Technologies", link: "/proj/technologies" },
            ]
        }
    ];

    return (
            <Col sm={2}>
              <Col sm={1}>
                <Navbar variant="dark" expand={false}>
                  <NavLink ><a href="/overview/" className="sidebar-button">Overview</a></NavLink>
                  {menuData.map((data, index) => (
                    <NavItem key={index}>
                      <ToggleMenu buttonText={data.buttonText} menuItems={data.menuItems} />
                    </NavItem>
                  ))}
                  <NavItem></NavItem>
                </Navbar>
              </Col>
            </Col>
    );
};

export default Sidebar;
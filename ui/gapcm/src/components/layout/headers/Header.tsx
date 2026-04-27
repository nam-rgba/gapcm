import { Link } from "react-router";


export interface HeaderNavigationItem {
    label: string;
    path: string;
}

export interface HeaderDropdownItem extends HeaderNavigationItem {
    icon?: string;
}

interface HeaderProps {
    logoUrl: string;
    items: HeaderNavigationItem[];
    isDropdown?: boolean;
    dropdownItems?: HeaderDropdownItem[];
    dropdownLabel?: string | React.ReactNode;
}


export const Header = (props: HeaderProps) => {

  return (
    <div className="header w-full h-16">
         <div className="logo w-[16%] h-full flex items-center justify-center">
            <Link to={"/"}>
                <img src={props.logoUrl} alt="Logo" className="h-10 object-contain" />
            </Link>
         </div>

        <div className="navigation w-[68%] h-full flex items-center justify-center gap-4">
            {props.items.map((item, index) => (
                <Link key={index} to={item.path} className="text-gray-700 hover:text-gray-900">
                    {item.label}
                </Link>
            ))}
        </div>

        {props.isDropdown && props.dropdownItems &&         <div>
            <div className="dropdown relative">
                <button className="dropdown-toggle flex items-center gap-1 text-gray-700 hover:text-gray-900">
                    {props.dropdownLabel}
                </button>
                <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden">
                    {props.dropdownItems.map((item, index) => (
                        <Link key={index} to={item.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            {item.icon && <img src={item.icon} alt={`${item.label} icon`} className="w-4 h-4 inline-block mr-2" />}
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

        </div>}
    </div>
  )
}

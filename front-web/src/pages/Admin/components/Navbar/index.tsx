import './styles.scss';

const Navbar = () => (
  <nav className="admin-nav-container">
    <ul>
      <li>
        <a href="link" className="admin-nav-item  active">
          My Product
        </a>
      </li>
      <li>
        <a href="link" className="admin-nav-item">
          My Category
        </a>
      </li>
      <li>
        <a href="link" className="admin-nav-item">
          My Users
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;

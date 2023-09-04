--
-- Database: `ecommerce_crx`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add user extra info', 7, 'add_userextrainfo'),
(26, 'Can change user extra info', 7, 'change_userextrainfo'),
(27, 'Can delete user extra info', 7, 'delete_userextrainfo'),
(28, 'Can view user extra info', 7, 'view_userextrainfo'),
(29, 'Can add category', 8, 'add_category'),
(30, 'Can change category', 8, 'change_category'),
(31, 'Can delete category', 8, 'delete_category'),
(32, 'Can view category', 8, 'view_category'),
(33, 'Can add product_ category', 9, 'add_product_category'),
(34, 'Can change product_ category', 9, 'change_product_category'),
(35, 'Can delete product_ category', 9, 'delete_product_category'),
(36, 'Can view product_ category', 9, 'view_product_category'),
(37, 'Can add recomentation', 10, 'add_recomentation'),
(38, 'Can change recomentation', 10, 'change_recomentation'),
(39, 'Can delete recomentation', 10, 'delete_recomentation'),
(40, 'Can view recomentation', 10, 'view_recomentation'),
(41, 'Can add code', 11, 'add_code'),
(42, 'Can change code', 11, 'change_code'),
(43, 'Can delete code', 11, 'delete_code'),
(44, 'Can view code', 11, 'view_code'),
(45, 'Can add order', 12, 'add_order'),
(46, 'Can change order', 12, 'change_order'),
(47, 'Can delete order', 12, 'delete_order'),
(48, 'Can view order', 12, 'view_order'),
(49, 'Can add product', 13, 'add_product'),
(50, 'Can change product', 13, 'change_product'),
(51, 'Can delete product', 13, 'delete_product'),
(52, 'Can view product', 13, 'view_product'),
(53, 'Can add shipping address', 14, 'add_shippingaddress'),
(54, 'Can change shipping address', 14, 'change_shippingaddress'),
(55, 'Can delete shipping address', 14, 'delete_shippingaddress'),
(56, 'Can view shipping address', 14, 'view_shippingaddress'),
(57, 'Can add order item', 15, 'add_orderitem'),
(58, 'Can change order item', 15, 'change_orderitem'),
(59, 'Can delete order item', 15, 'delete_orderitem'),
(60, 'Can view order item', 15, 'view_orderitem'),
(61, 'Can add images', 16, 'add_images'),
(62, 'Can change images', 16, 'change_images'),
(63, 'Can delete images', 16, 'delete_images'),
(64, 'Can view images', 16, 'view_images'),
(65, 'Can add Old password', 17, 'add_passwordhistory'),
(66, 'Can change Old password', 17, 'change_passwordhistory'),
(67, 'Can delete Old password', 17, 'delete_passwordhistory'),
(68, 'Can view Old password', 17, 'view_passwordhistory'),
(69, 'Can add Configuration', 18, 'add_userpasswordhistoryconfig'),
(70, 'Can change Configuration', 18, 'change_userpasswordhistoryconfig'),
(71, 'Can delete Configuration', 18, 'delete_userpasswordhistoryconfig'),
(72, 'Can view Configuration', 18, 'view_userpasswordhistoryconfig');

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$3S5Rqpztny3ZUzeM2jO6Cf$vtYD6COiM5mhbUZngq6HGbILfXnI826czDsGfggp/rg=', '2023-08-31 17:47:16.814824', 1, 'admin_developer', '', '', 'alex.arg.zt@gmail.com', 1, 1, '2023-08-31 17:16:34.317881');

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2023-08-31 17:47:31.582228', '1', 'conexion', 1, '[{\"added\": {}}]', 8, 1),
(2, '2023-08-31 17:50:07.831389', '1', 'Earbuds', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"product_ category\", \"object\": \"conexion\"}}, {\"added\": {\"name\": \"images\", \"object\": \"Images object (1)\"}}, {\"added\": {\"name\": \"images\", \"object\": \"Images object (2)\"}}, {\"added\": {\"name\": \"images\", \"object\": \"Images object (3)\"}}]', 13, 1);

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(8, 'main', 'category'),
(11, 'main', 'code'),
(16, 'main', 'images'),
(12, 'main', 'order'),
(15, 'main', 'orderitem'),
(13, 'main', 'product'),
(9, 'main', 'product_category'),
(10, 'main', 'recomentation'),
(14, 'main', 'shippingaddress'),
(7, 'main', 'userextrainfo'),
(17, 'password_history', 'passwordhistory'),
(18, 'password_history', 'userpasswordhistoryconfig'),
(6, 'sessions', 'session');


CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-08-31 17:12:51.364094'),
(2, 'auth', '0001_initial', '2023-08-31 17:12:51.544258'),
(3, 'admin', '0001_initial', '2023-08-31 17:12:51.587040'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-08-31 17:12:51.596544'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-08-31 17:12:51.600984'),
(6, 'contenttypes', '0002_remove_content_type_name', '2023-08-31 17:12:51.623277'),
(7, 'auth', '0002_alter_permission_name_max_length', '2023-08-31 17:12:51.646896'),
(8, 'auth', '0003_alter_user_email_max_length', '2023-08-31 17:12:51.660145'),
(9, 'auth', '0004_alter_user_username_opts', '2023-08-31 17:12:51.671320'),
(10, 'auth', '0005_alter_user_last_login_null', '2023-08-31 17:12:51.707772'),
(11, 'auth', '0006_require_contenttypes_0002', '2023-08-31 17:12:51.710771'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2023-08-31 17:12:51.718375'),
(13, 'auth', '0008_alter_user_username_max_length', '2023-08-31 17:12:51.739020'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2023-08-31 17:12:51.755973'),
(15, 'auth', '0010_alter_group_name_max_length', '2023-08-31 17:12:51.772585'),
(16, 'auth', '0011_update_proxy_permissions', '2023-08-31 17:12:51.780878'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2023-08-31 17:12:51.798967'),
(18, 'main', '0001_initial', '2023-08-31 17:12:51.846503'),
(19, 'main', '0002_userextrainfo_authenticated', '2023-08-31 17:12:51.862515'),
(20, 'main', '0003_category_products', '2023-08-31 17:12:51.916383'),
(21, 'main', '0004_products_brand_alter_products_color', '2023-08-31 17:12:51.940843'),
(22, 'main', '0005_alter_products_price', '2023-08-31 17:12:51.970820'),
(23, 'main', '0006_alter_products_category', '2023-08-31 17:12:52.162422'),
(24, 'main', '0007_products_stock', '2023-08-31 17:12:52.171387'),
(25, 'main', '0008_remove_products_category_products_categorys', '2023-08-31 17:12:52.293341'),
(26, 'main', '0009_remove_products_categorys', '2023-08-31 17:12:52.299356'),
(27, 'main', '0010_category_content_type_category_object_id_and_more', '2023-08-31 17:12:52.396531'),
(28, 'main', '0011_alter_category_content_type', '2023-08-31 17:12:52.402955'),
(29, 'main', '0012_remove_products_categorys_and_more', '2023-08-31 17:12:52.420983'),
(30, 'main', '0013_alter_category_content_type_alter_category_id', '2023-08-31 17:12:52.431971'),
(31, 'main', '0014_rename_content_type_category_contenttype', '2023-08-31 17:12:52.529832'),
(32, 'main', '0015_rename_contenttype_category_content_type', '2023-08-31 17:12:52.611546'),
(33, 'main', '0016_alter_category_name', '2023-08-31 17:12:52.638464'),
(34, 'main', '0017_alter_category_object_id', '2023-08-31 17:12:52.643047'),
(35, 'main', '0018_alter_products_brand_alter_products_color_and_more', '2023-08-31 17:12:52.732068'),
(36, 'main', '0019_remove_category_content_type_and_more', '2023-08-31 17:12:52.828492'),
(37, 'main', '0020_products_broad_products_high_products_large', '2023-08-31 17:12:52.851519'),
(38, 'main', '0021_rename_high_products_height', '2023-08-31 17:12:52.857517'),
(39, 'main', '0022_products_create_at', '2023-08-31 17:12:52.864019'),
(40, 'main', '0023_alter_products_create_at', '2023-08-31 17:12:52.869019'),
(41, 'main', '0024_alter_products_create_at', '2023-08-31 17:12:52.875032'),
(42, 'main', '0025_offerts', '2023-08-31 17:12:52.915111'),
(43, 'main', '0026_delete_offerts', '2023-08-31 17:12:52.925618'),
(44, 'main', '0027_products_discount', '2023-08-31 17:12:52.937783'),
(45, 'main', '0028_recomentation', '2023-08-31 17:12:52.967953'),
(46, 'main', '0029_alter_recomentation_product', '2023-08-31 17:12:53.069450'),
(47, 'main', '0030_alter_recomentation_product', '2023-08-31 17:12:53.133330'),
(48, 'main', '0031_code', '2023-08-31 17:12:53.139333'),
(49, 'main', '0032_code_user', '2023-08-31 17:12:53.162031'),
(50, 'main', '0033_order_rename_products_product_shippingaddress_and_more', '2023-08-31 17:12:53.408973'),
(51, 'main', '0034_order_totalprice', '2023-08-31 17:12:53.418528'),
(52, 'main', '0035_rename_deviredat_order_deliveredat', '2023-08-31 17:12:53.432734'),
(53, 'main', '0036_remove_shippingaddress_shippingprice', '2023-08-31 17:12:53.444138'),
(54, 'main', '0037_orderitem_discount', '2023-08-31 17:12:53.459052'),
(55, 'main', '0038_alter_product_description', '2023-08-31 17:12:53.465049'),
(56, 'main', '0039_alter_product_description', '2023-08-31 17:12:53.473051'),
(57, 'main', '0040_alter_product_description', '2023-08-31 17:12:53.479055'),
(58, 'main', '0041_alter_product_description', '2023-08-31 17:12:53.486550'),
(59, 'main', '0042_remove_userextrainfo_user_userextrainfo_user_email', '2023-08-31 17:12:53.808507'),
(60, 'main', '0043_remove_order_user_order_user_email', '2023-08-31 17:12:54.121701'),
(61, 'main', '0044_order_transactionid', '2023-08-31 17:12:54.139310'),
(62, 'main', '0045_images', '2023-08-31 17:12:54.166669'),
(63, 'main', '0046_images_productid', '2023-08-31 17:12:54.213866'),
(64, 'main', '0047_product_pdf', '2023-08-31 17:12:54.233269'),
(65, 'password_history', '0001_initial', '2023-08-31 17:12:54.404475'),
(66, 'password_history', '0002_auto_20180424_1422', '2023-08-31 17:12:54.409105'),
(67, 'password_history', '0003_auto_20201206_1357', '2023-08-31 17:12:54.415058'),
(68, 'sessions', '0001_initial', '2023-08-31 17:12:54.454861'),
(69, 'main', '0048_remove_code_user_delete_userextrainfo_delete_code', '2023-09-04 17:03:25.470395');

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('hhv01marociiq6t3tci9ijhp1gjhy7q4', '.eJxVjEEOwiAQRe_C2hBoYSgu3XsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwkzgLLU6_W8T04LoDumO9NZlaXZc5yl2RB-3y2oifl8P9OyjYy7eGqJ2JlMElTZCVZjUaoJE5GjUYzxNmZAAcImbH1pNVExKP2lhMXon3B_hzOIg:1qblKL:lC_ZYfKY2mXvnWk2p-Z-I7-Nd2jTN30oTMW_bAuXBRA', '2023-09-14 17:19:29.308229'),
('jigqxi5zijw5pmbesnlxpbtx6drvg8o8', '.eJxVjEEOwiAQRe_C2hBoYSgu3XsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwkzgLLU6_W8T04LoDumO9NZlaXZc5yl2RB-3y2oifl8P9OyjYy7eGqJ2JlMElTZCVZjUaoJE5GjUYzxNmZAAcImbH1pNVExKP2lhMXon3B_hzOIg:1qbllE:9-7_V2jNpPYOBXtui09pWN9FXJVXMNoM_GOqyDxIIlk', '2023-09-14 17:47:16.823694');

CREATE TABLE `main_category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `main_category` (`id`, `name`) VALUES
(1, 'conexion');

CREATE TABLE `main_images` (
  `id` int(11) NOT NULL,
  `path` varchar(250) NOT NULL,
  `productId_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `main_images` (`id`, `path`, `productId_id`) VALUES
(1, 'https://ecommercecr.s3.us-east-2.amazonaws.com/public/eardubs+beat/earbuds+pro+1.1.jpeg', 1),
(2, 'https://ecommercecr.s3.us-east-2.amazonaws.com/public/eardubs+beat/earbuds+pro+1.jpeg', 1),
(3, 'https://ecommercecr.s3.us-east-2.amazonaws.com/public/eardubs+beat/earbuds+pro.jpeg', 1);

CREATE TABLE `main_order` (
  `id` int(11) NOT NULL,
  `paymentMethod` varchar(50) DEFAULT NULL,
  `shippingPrice` decimal(7,2) DEFAULT NULL,
  `isPaid` tinyint(1) NOT NULL,
  `paidAt` datetime(6) DEFAULT NULL,
  `isDelivered` tinyint(1) NOT NULL,
  `deliveredAt` datetime(6) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL,
  `totalPrice` decimal(7,2) DEFAULT NULL,
  `user_email` varchar(254) NOT NULL,
  `transactionId` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `main_order`
--

INSERT INTO `main_order` (`id`, `paymentMethod`, `shippingPrice`, `isPaid`, `paidAt`, `isDelivered`, `deliveredAt`, `createdAt`, `totalPrice`, `user_email`, `transactionId`) VALUES
(1, 'card', 3.00, 0, NULL, 0, NULL, '2023-08-31 18:16:17.679368', 98.99, 'alex.arg.zt@gmail.com', NULL),
(2, 'card', 3.00, 0, NULL, 0, NULL, '2023-08-31 18:16:17.679368', 98.99, 'alex.arg.zt@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `main_orderitem`
--

CREATE TABLE `main_orderitem` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `price` decimal(7,2) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `discount` decimal(3,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `main_orderitem`
--

INSERT INTO `main_orderitem` (`id`, `name`, `qty`, `price`, `image`, `order_id`, `product_id`, `discount`) VALUES
(1, 'Earbuds', 1, 95.99, 'https://ecommercecr.s3.us-east-2.amazonaws.com/public/eardubs+beat/earbuds+pro+1.1.jpeg', 1, 1, 0.0),
(2, 'Earbuds', 1, 95.99, 'https://ecommercecr.s3.us-east-2.amazonaws.com/public/eardubs+beat/earbuds+pro+1.1.jpeg', 2, 1, 0.0);

-- --------------------------------------------------------

--
-- Table structure for table `main_product`
--

CREATE TABLE `main_product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `color` varchar(15) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `stock` int(11) NOT NULL,
  `broad` decimal(5,2) NOT NULL,
  `height` decimal(5,2) NOT NULL,
  `large` decimal(5,2) NOT NULL,
  `create_at` date NOT NULL,
  `discount` decimal(3,1) NOT NULL,
  `pdf` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `main_product`
--

INSERT INTO `main_product` (`id`, `name`, `description`, `price`, `color`, `brand`, `stock`, `broad`, `height`, `large`, `create_at`, `discount`, `pdf`) VALUES
(1, 'Earbuds', 'Los Earbuds Beats, también conocidos como Beats Earphones, son auriculares inalámbricos diseñados y fabricados por Beats by Dre, una marca de productos de audio que se hizo popular por su enfoque en la calidad del sonido y el estilo moderno. Los Earbuds Beats suelen ofrecer un diseño elegante y moderno, con una atención especial a los detalles estéticos y la comodidad.', 95.99, 'white', 'Beat', 4, 0.00, 0.00, 0.00, '2023-08-31', 0.0, 'https://ecommercecr.s3.us-east-2.amazonaws.com/public/eardubs+beat/earbuds.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `main_product_category`
--

CREATE TABLE `main_product_category` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `main_product_category`
--

INSERT INTO `main_product_category` (`id`, `category_id`, `product_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `main_recomentation`
--

CREATE TABLE `main_recomentation` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `main_shippingaddress`
--

CREATE TABLE `main_shippingaddress` (
  `id` int(11) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL,
  `municipality` varchar(50) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `main_shippingaddress`
--

INSERT INTO `main_shippingaddress` (`id`, `address`, `department`, `municipality`, `order_id`) VALUES
(1, 'residencial San Rafael, casa 5h', 'La Libertad', 'Santa Tecla', 2),
(2, 'residencial San Rafael, casa 5h', 'La Libertad', 'Santa Tecla', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_history_passwordhistory`
--

CREATE TABLE `password_history_passwordhistory` (
  `id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` datetime(6) NOT NULL,
  `user_config_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_history_userpasswordhistoryconfig`
--

CREATE TABLE `password_history_userpasswordhistoryconfig` (
  `id` int(11) NOT NULL,
  `date` datetime(6) NOT NULL,
  `salt` varchar(120) NOT NULL,
  `iterations` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `main_category`
--
ALTER TABLE `main_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_images`
--
ALTER TABLE `main_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_images_productId_id_3368e914_fk_main_product_id` (`productId_id`);

--
-- Indexes for table `main_order`
--
ALTER TABLE `main_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_orderitem`
--
ALTER TABLE `main_orderitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_orderitem_order_id_72ea9725_fk_main_order_id` (`order_id`),
  ADD KEY `main_orderitem_product_id_b90dba64_fk_main_product_id` (`product_id`);

--
-- Indexes for table `main_product`
--
ALTER TABLE `main_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_product_category`
--
ALTER TABLE `main_product_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_product_category_category_id_eaf05aeb_fk_main_category_id` (`category_id`),
  ADD KEY `main_product_category_product_id_ee2fd270_fk_main_product_id` (`product_id`);

--
-- Indexes for table `main_recomentation`
--
ALTER TABLE `main_recomentation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `main_recomentation_product_id_5d2e2f80_uniq` (`product_id`);

--
-- Indexes for table `main_shippingaddress`
--
ALTER TABLE `main_shippingaddress`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_shippingaddress_order_id_4138ad8c_fk_main_order_id` (`order_id`);

--
-- Indexes for table `password_history_passwordhistory`
--
ALTER TABLE `password_history_passwordhistory`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `password_history_passwor_user_config_id_password_788e1175_uniq` (`user_config_id`,`password`);

--
-- Indexes for table `password_history_userpasswordhistoryconfig`
--
ALTER TABLE `password_history_userpasswordhistoryconfig`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `password_history_userpas_user_id_iterations_fa725dcb_uniq` (`user_id`,`iterations`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `main_category`
--
ALTER TABLE `main_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `main_images`
--
ALTER TABLE `main_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `main_order`
--
ALTER TABLE `main_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `main_orderitem`
--
ALTER TABLE `main_orderitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `main_product`
--
ALTER TABLE `main_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `main_product_category`
--
ALTER TABLE `main_product_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `main_recomentation`
--
ALTER TABLE `main_recomentation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `main_shippingaddress`
--
ALTER TABLE `main_shippingaddress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `password_history_passwordhistory`
--
ALTER TABLE `password_history_passwordhistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `password_history_userpasswordhistoryconfig`
--
ALTER TABLE `password_history_userpasswordhistoryconfig`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `main_images`
--
ALTER TABLE `main_images`
  ADD CONSTRAINT `main_images_productId_id_3368e914_fk_main_product_id` FOREIGN KEY (`productId_id`) REFERENCES `main_product` (`id`);

--
-- Constraints for table `main_orderitem`
--
ALTER TABLE `main_orderitem`
  ADD CONSTRAINT `main_orderitem_order_id_72ea9725_fk_main_order_id` FOREIGN KEY (`order_id`) REFERENCES `main_order` (`id`),
  ADD CONSTRAINT `main_orderitem_product_id_b90dba64_fk_main_product_id` FOREIGN KEY (`product_id`) REFERENCES `main_product` (`id`);

--
-- Constraints for table `main_product_category`
--
ALTER TABLE `main_product_category`
  ADD CONSTRAINT `main_product_category_category_id_eaf05aeb_fk_main_category_id` FOREIGN KEY (`category_id`) REFERENCES `main_category` (`id`),
  ADD CONSTRAINT `main_product_category_product_id_ee2fd270_fk_main_product_id` FOREIGN KEY (`product_id`) REFERENCES `main_product` (`id`);

--
-- Constraints for table `main_recomentation`
--
ALTER TABLE `main_recomentation`
  ADD CONSTRAINT `main_recomentation_product_id_5d2e2f80_fk_main_product_id` FOREIGN KEY (`product_id`) REFERENCES `main_product` (`id`);

--
-- Constraints for table `main_shippingaddress`
--
ALTER TABLE `main_shippingaddress`
  ADD CONSTRAINT `main_shippingaddress_order_id_4138ad8c_fk_main_order_id` FOREIGN KEY (`order_id`) REFERENCES `main_order` (`id`);

--
-- Constraints for table `password_history_passwordhistory`
--
ALTER TABLE `password_history_passwordhistory`
  ADD CONSTRAINT `password_history_pas_user_config_id_20af20ac_fk_password_` FOREIGN KEY (`user_config_id`) REFERENCES `password_history_userpasswordhistoryconfig` (`id`);

--
-- Constraints for table `password_history_userpasswordhistoryconfig`
--
ALTER TABLE `password_history_userpasswordhistoryconfig`
  ADD CONSTRAINT `password_history_use_user_id_bc5676f2_fk_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

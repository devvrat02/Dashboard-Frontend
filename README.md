
**Project Title:** Dashboard
**Live Link / Demo Link:**
[\[netlify\]]()
## MainFile
```markdown
├── src
│ ├── API
│ | ├── server.tsx //setting backend
```  

## File Structure
Structure of Files.
```markdown
├── ProjectDemo #screenshot of project
├── src
│ ├── Assets //Images
│ ├── API
│ | ├──
│ | ├── axios.instance.tsx//setting api header
│ | ├── server.tsx // setting enviroment
│ ├── Context
│ | ├── AuthContext ...
│ ├── Components
│ | ├── Custom Components ...
│ | ├── index.tsx
│ ├── ProtectedRoute
│ | ├── index.tsx //for making authentication necessary
│ ├── reducers [redux/thunkapi]
│ | ├── []Slice.tsx
│ ├── Router
│ | ├── index.tsx [Used for dom routing ]
│ ├── type
│ | ├── index.tsx [defining datatypes ]
│ ├── utils
│ | ├── used for defining utilities
│ ├── View
│ | ├── Section Screens [Dashboard, analytics, setting, finance] ...
│ | ├── index.tsx
│ ├── app.tsx
│ ├── index.tsx
│ ├── input.css
│ ├── store.tsx //redux store
│ ├── style.css #Main css file
├── public
│ ├── index.html
├── dist (or build)
├── node_modules
├── package.json
│ ├── tailwind.config.js //for setting theme colors
└── .gitignore
```
## View Screens
These are the Screens that are used to Create Website all exported from `src/view/index.tsx`
| Screen Name(View)      | props | description |
| ------------------| ----- |----------------------------|
| `Analytics` | `none`| Analtical Screen        |
| `Dashboard` | `none`| For Structuring the website |
| `Finance` | `none`| Finance Screen |
| `Login` | `none`| User Login Portal |
| `Signup` | `none`| User Signup page |
| `Setting` | `none`| Setting Page |
 
##  Context
These are the that is use for making context api that is usefull in whole website  `src/context/...tsx`

| Context  | Function | description |
| ------------------| ----- |----------------------------|
| `AuthContext` | `authUser, setAuthUser, isLoggedIn, setisLoggedIn `| For Authenticating the User and passing value using Auth Context     |
| `ThemeContext` | `notify, loading, setLoading, tempLoader`| Used For showing toast/Loader in root |
## Components
These are the Custumized to use it repeatively.
| Component Name | props | description / Used in |
| ----------- | -------| ------------------------         |
| `CustomTable` | `columns | data| rowCss| headCss| rowStyle| colStyle` | Data Table for analytics page |
| `Header` | `none` | Header its added in dashboard |
| `InvoiceHistory` | `none` | Used in Finance Page|
| `InvoiceTable` | `none` | Recent Invoice in Analytics |
| `SalesGraph` | `none` | Sales [Line] Graph used in Analytics |
| `Sidebar` | `hider` | Global Component |
| `StatCard` | `prop[type/index.tsx]` | Production Card for analytics |
| `StaticsGraph` | `none` | Doughnut Graph for analytics |
| `Wallet` | `none` | Wallet for Finance Page |
| `notify` | `title|message|success` | Used for showing toast Message |
| `Loader` | `loading` | Used for showing Loader on full screen. |

  

## ScreenShots
Saved in ProjectDemo Folder
` Images is availble in ProjectDemo folder`

## Technology Used / library

**`TypeScript:`**  `language used to build the webapplication`
**`JavaScript:`**  `Code can be changed in least effort `
**`React:`**  `library used in application`
**`TailwindCss:`**  `css used to design UI/UX `
**`react-form-hook:`**  `libary used to build Appointment Form`
and many more.

## **Setup / Installation**
##### Clone the repo

```bash
git  clone  ...
cd  proj
```
##### Install the packages
```bash
yarn  install
```
or
```bash
npm  install
```
##### Start the Application
```bash
yarn  start
```
or
```bash
npm  start
```
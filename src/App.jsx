import { ConfigProvider } from 'antd';
import './App.css'
import zhCN from 'antd/locale/zh_CN';
import UploadFn from './pages/UploadFn';
// import Child from './pages/child';


export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <UploadFn />
      {/* <Child /> */}
    </ConfigProvider>
  )
}




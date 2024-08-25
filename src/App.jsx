import { ConfigProvider } from 'antd';
import './App.css'
import zhCN from 'antd/locale/zh_CN';
import UploadFn from './pages/UploadFn';


export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <UploadFn />
    </ConfigProvider>
  )
}




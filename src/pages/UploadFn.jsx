import { AutoComplete, Button, Input, Select } from 'antd';
import { useEffect, useRef, useState } from 'react';
import fetchJSONP from 'fetch-jsonp';
import classes, { searchResult, btn, antInput } from './css/UploadFn.module.less';

export default function UploadFn() {

    const containerRef = useRef(null)
    const [options, setOptions] = useState([])
    const [value, setValue] = useState(undefined)

    function initMap() {
        //定义地图中心点坐标
        var center = new qq.maps.LatLng(39.984120, 116.307484)
        var map = new qq.maps.Map(containerRef.current, {
            center: center,
            zoom: 8,
            scaleControl: false,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false
        });
    }

    function handleSearch() {
        fetchJSONP(
            `https://apis.map.qq.com/ws/place/v1/suggestion?keyword=${value}&key=W6KBZ-JHLWV-J4TPO-5BKCY-Z4RX6-L5BRN&output=jsonp`
        ).then(blob => {
            return blob.json()
        }).then(res => {
            console.log(res);
            const { data, status } = res
            if (status === 0) {
                const result = data.map(item => ({
                    value: item.id,
                    label: item.title
                }))
                console.log(result);
                setOptions(result)
            }
        })
    }

    async function getPanelValue(e) {
        setValue(e.target.value)
        setOptions([])
    }

    useEffect(() => {
        if (containerRef.current) {
            initMap()
        }

    }, [containerRef]);

    return (
        <>
            <div className={searchResult}>
                <Input
                    value={value}
                    options={options}
                    onChange={getPanelValue}
                    placeholder="请输入关键词"
                    className={antInput}
                />
                <Button className={btn} type="primary" onClick={handleSearch}>搜索</Button>
                {
                    options.length ? <div className={classes.resultList}>
                        {
                            options.map(item => (
                                <div className={classes.resultListItem} key={item.value}>{item.label}</div>
                            ))
                        }
                    </div> : null
                }
            </div>
            <div className='container' ref={containerRef} style={{ width: 700, height: 370 }}></div>
        </>
    )
}
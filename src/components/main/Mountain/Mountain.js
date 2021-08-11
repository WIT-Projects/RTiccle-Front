import React from 'react'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { AreaChart, Grid, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'



export default class Mountain extends React.PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
        data: [0,0,0,0,0,0,0], // animation을 위한 빈 데이터
        setData: [0, 10, 22, 100,137,50,63, 33, 17, 10, 0] // 실제 데이터, 앞에서 1,2 번째 뒤에서 1,2 번째 데이터는 그래프 모양을 위한 fake data
        };
        
    }
    componentDidMount() {
        setTimeout( () => {this.setState({data : this.state.setData}) },200)
        
    }

    render() {

        const Gradient = ({ index }) => (
            <Defs key={index}>
            <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'rgb(107, 220, 194)'} stopOpacity={0.2}/>
                <Stop offset={'100%'} stopColor={'rgb(107, 220, 194)'} stopOpacity={0.8}/>
            </LinearGradient>
            </Defs>
        )

        // 그래프에 직접 label을 달면 animation 효과 때문에 맨 처음 render 할 때 label 이 보이지 않음
        // 산에만 animation을 적용하기 위해 label을 따로 분리 -> Main.js
        // const label = ["신문/기사", "만화", "SNS", "블로그", "책", "기타"]

        return (
        <>
            <AreaChart
                style={{ height: 180 }}
                data={this.state.data}
                contentInset={{ top: 10, left:5,right:5}}
                curve={shape.curveNatural}
                numberOfTicks={0} // 세로 Grid 0 개
                svg={{ fill: 'url(#gradient)' }}
                animate={true}
                animationDuration={500}
            >
                <Grid/>
                <Gradient/>
            </AreaChart>
            {/* <XAxis
                    style={{ marginTop:15}}
                    data={this.state.setData}
                    formatLabel={(value, index) => label[index]}
                    contentInset={{ left: 35, right: 35}}
                    svg={{ fontSize: 14, fill: '#050505', fontFamily : 'NotoSansKR-Bold'}}
                /> */}
        </>
        )
    }
}
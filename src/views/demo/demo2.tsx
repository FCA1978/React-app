import React ,{ PureComponent } from "react";

interface IProps {
    name:string,
    age?:number
}

interface Istate{
    message:string
    counter:number
}

// interface ISnapshot {
//     address:string
// }

class Demo02 extends PureComponent<IProps,Istate> {

    state = {
        message:'hello',
        counter:1
    }
    
    /* constructor */
    // constructor(props:IProps){
    //     super(props) 
    // }

    // 快照
    // getHeapSnapshotBeforeUpdate(){
    //     return { name:'kobe',age:30 }
    // }

    render(): React.ReactNode {
        return <div>
            name:{this.props.name},
            age:{this.props.age},
            message:{this.state.message},
            counter:{this.state.counter}

        </div>
    }


}

export default Demo02
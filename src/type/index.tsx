
export type props={    
    title: string|null;
    Counts: string|null;
    icon: ({prop}:any) => JSX.Element|null;
    change: string|null;
    color: string|null;
    percentage: string|null;
}

//columns
export type col={
    label:string,
    field:string,
    className:string,
    render?:(rowdata:any)=>JSX.Element,
}
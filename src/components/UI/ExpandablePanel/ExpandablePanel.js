import {useState} from "react";

function ExpandablePanel({header, children}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={'mb-2 border rounded'}>
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className={'flex flex-row items-center justify-between'}>
                    {header}
                </div>
                <div
                    className={'cursor-pointer'}
                    onClick={() => setExpanded(prev => !prev)}
                >
                    {expanded ? <p>Expanded</p> : <p>Unexpanded</p>}
                </div>
            </div>
            {expanded && <div className="p-2 border-t">{children}</div>}
        </div>
    )
}

export default ExpandablePanel;
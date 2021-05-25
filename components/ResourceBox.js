import { Button, Typography } from "@material-ui/core"
import Icon from '@mdi/react'
import { mdiChevronDown, mdiChevronLeft, mdiChevronRight } from '@mdi/js'

export default function ResourceBox(props) {
    const { resourcesType, resources } = props;
    return <div style={{margin: 10}}>
        <div style={{ display: 'flex', flexDirection:'row', cursor: 'pointer' }}>
            <Typography>
                {resourcesType}
            </Typography>
            <Icon path={mdiChevronDown}
                title="Expand List"
                size={1}
                />
        </div>
        <div
            className='ResourceDrop' 
            style={{height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}
            >
            <Button>
                <Icon
                path={mdiChevronLeft}
                title="Prev Element"
                size={1}
                />
            </Button>
            {resources.map( element =>  <div 
                                            className='ResourceElement'
                                            style={{background: 'white', width: 100, height: '100%', margin: '0 5px'}}
                                            >
                                            {resourcesType}
                                        </div>)}
            <Button>
                <Icon
                    path={mdiChevronRight}
                    title="Next Element"
                    size={1}
                />
            </Button>
        </div>
    </div>
};
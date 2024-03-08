import { useParams } from 'react-router-dom';
import { useBoardDataId } from '../../../../api/boardData';
import { usePanelDataByBoardId } from '../../../../api/panelData';
import { useTaskDataByPanelId } from '../../../../api/taskData';

export const useMainPageData = () => {
    const { id } = useParams();
    const { boardByIdData } = useBoardDataId(id);
    console.log('boardByIdData', boardByIdData);
    const { panelByBoardIdData } = usePanelDataByBoardId(id)





    console.log('panelByBoardIdData', panelByBoardIdData);
//console.log('taskByPanelIdData', taskByPanelIdData);
    return { boardByIdData, panelByBoardIdData }
}

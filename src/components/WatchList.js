import { Table } from 'reactstrap'
import NewWatchForm from './NewWatchForm';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const WatchList = (props) => {
    const watches = props.watches;
    return(
        <Table dark>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {!watches || watches.length <= 0 ? (
                    <tr>
                        <td colSpan="6" align="center">
                            <b>No watches found</b>
                        </td>
                    </tr>
                ) : (
                    watches.map(watch => (
                        <tr key={watch.pk}>
                            <td>{watch.name}</td>
                            <td>{watch.type}</td>
                            <td>{watch.image}</td>
                            <td align="center">
                                <NewWatchForm
                                create={false}
                                watch={watch}
                                resetWatch={props.resetWatch}
                                />
                                &nbsp;&nbsp;
                                <ConfirmDeleteModal
                                pk={watch.pk}
                                resetWatch={props.resetWatch}
                                />
                            </td>
                        </tr>
                    )
                    )
                )}
            </tbody>
        </Table>
    )
}

export default WatchList
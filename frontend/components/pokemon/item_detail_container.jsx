import {connect} from 'react-redux';
import ItemDetail from './item_detail';
import {getSingleItem} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  own: ownProps,
  item: getSingleItem(state, ownProps.params.itemId)
});


export default connect(mapStateToProps)(ItemDetail);

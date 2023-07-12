import StandardButton from '@ui-components/Buttons/StandardButton'
import { PanelWrapper } from '@ui-components/Questions'
import TileWrapper from '@ui-components/Questions/CategorySelection/ImageTile'
import DiscreteSlider from '@ui-components/Questions/DiscreteSlider'
import BoolQuestion from '@ui-components/Questions/BoolQuestion'
import ReviewPanel from '@ui-components/Questions/DiagnosisReview/ReviewPanel'

const registry = {
  standardButton: StandardButton,

  // slider
  slider: DiscreteSlider,
  tileWrapper: TileWrapper,
  panelWrapper: PanelWrapper,
  reviewPanel: ReviewPanel,
  boolQuestion: BoolQuestion,
}

export default registry

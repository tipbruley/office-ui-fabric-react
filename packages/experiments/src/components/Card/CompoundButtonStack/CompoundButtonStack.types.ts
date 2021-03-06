import { IStyle } from 'office-ui-fabric-react/lib/Styling';

export interface ICompoundButtonStackStyles {
  /**
   * Style set for the compound button component root
   */
  root: IStyle;
}

export interface ICompoundAction {
  /**
   * Defines the title of the button
   */
  title: string;

  /**
   * Defines the function that is executed on clicking this action
   */
  action: VoidFunction;

  /**
   * Defines whether or not this button is primary
   */
  primary?: boolean;

  /**
   * Description to help explain what the action would do
   */
  description?: string;
}

export interface ICompoundButtonStackProps {
  /**
   * List of actions this stack is going to support
   */
  actions: ICompoundAction[];
}

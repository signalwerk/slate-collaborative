import {Operation} from "../action/Operation";
import {setSelectionTransformer} from "./setSelectionTransformer";
import {insertTextTransformer} from "./insertTextTransformer";
import {removeTextTransformer} from "./removeTextTransformer";
import {insertNodeTransformer} from "./insertNodeTransformer";
import {removeNodeTransformer} from "./removeNodeTransformer";
import {setNodeTransformer} from "./setNodeTransformer";
import {moveNodeTransformer} from "./moveNodeTransformer";

export function operationTransformer(operation: Operation, appliedOperation: Operation): Operation[] {
    switch (operation.type) {
        case "set_selection": return setSelectionTransformer(operation, appliedOperation);
        case "insert_text": return insertTextTransformer(operation, appliedOperation);
        case "remove_text": return removeTextTransformer(operation, appliedOperation);
        case "insert_node": return insertNodeTransformer(operation, appliedOperation);
        case "remove_node": return removeNodeTransformer(operation, appliedOperation);
        case "set_node": return setNodeTransformer(operation, appliedOperation);
        case "move_node": return moveNodeTransformer(operation, appliedOperation);
        default: return [operation];
    }
}
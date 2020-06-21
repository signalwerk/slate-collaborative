import {ConnectionId} from "./ConnectionId";
import {RecordId} from "record";

export default interface RecordConnectionRepository {
    findConnectionsByRecordId(recordId: RecordId): Promise<ConnectionId[]>
    findRecordIdsByConnectionId(connectionId: ConnectionId): Promise<RecordId[]>

    addConnection(recordId: RecordId, connectionId: ConnectionId): Promise<void>
    removeConnection(recordId: RecordId, connectionId: ConnectionId): Promise<void>
}

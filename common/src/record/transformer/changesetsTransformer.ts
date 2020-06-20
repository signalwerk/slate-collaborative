import {Changeset} from "../action/Changeset";
import changesetTransformer from "./changesetTransformer";

export function changesetsTransformer(leftChangesets: Changeset[], topChangesets: Changeset[]): [Changeset[], Changeset[]] {
    let bottomChangesets: Changeset[] = [];
    let rightChangesets: Changeset[] = [];
    for (const leftChangeset of leftChangesets) {
        bottomChangesets = [];
        for (const topChangeset of topChangesets) {
            bottomChangesets = [...bottomChangesets, changesetTransformer(topChangeset, leftChangeset)];
            rightChangesets = [...rightChangesets, changesetTransformer(leftChangeset, topChangeset)];
        }
        topChangesets = bottomChangesets;
    }

    return [rightChangesets, bottomChangesets];
}

import * as newrelic from '@pulumi/newrelic';
import { Input, Resource } from '@pulumi/pulumi';
import { NrqlAlertConditionNrql } from '@pulumi/newrelic/types/input';

export default function ({
  policyId,
  name,
  nrql,
  dependsOn,
}: {
  policyId: number,
  name: string,
  nrql: Input<NrqlAlertConditionNrql>,
  dependsOn?: Input<Resource>,
}) {
  return new newrelic.NrqlAlertCondition(`${name}`, {
    description: `Alert when ${name} rates exceeds acceptable threshold.`,
    policyId,
    nrql,
    critical: {
      operator: 'above_or_equals',
      threshold: 1,
      thresholdDuration: 300,
      thresholdOccurrences: 'at_least_once',
    },
    aggregationMethod: 'EVENT_FLOW',
    aggregationDelay: '60',
    violationTimeLimitSeconds: (3 * 60000), // 3 minutes
    enabled: true,
  }, {
    dependsOn,
  })
}
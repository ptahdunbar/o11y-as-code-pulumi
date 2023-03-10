import * as newrelic from '@pulumi/newrelic';

export default function ({
    name,
    incidentPreference = 'PER_CONDITION',
}: {
    name: string,
    incidentPreference: string,
}): newrelic.AlertPolicy {
  return new newrelic.AlertPolicy(`alert-${name}`, {
    name: `${name} Alert Policy (Pulumi)`,
    incidentPreference,
  });
}
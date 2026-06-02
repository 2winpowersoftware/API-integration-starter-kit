# Troubleshooting

Problem:
Request timeout

Solution:
Increase timeout value.

------------------

Problem:
Duplicate transaction

Solution:
Use Idempotency-Key.

------------------

Problem:
Webhook replay attack

Solution:
Validate timestamp.
Validate signature.
Store processed event IDs.

------------------

Problem:
Invalid signature

Solution:
Check API secret.
Check timestamp.
Check payload format.

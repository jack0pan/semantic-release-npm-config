module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        'changelogFile': 'CHANGELOG.md'
      }
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        'assets': [
          'CHANGELOG.md',
          'package.json'
        ],
        'message': 'chore(release): version ${nextRelease.version} changelog\n\n${nextRelease.notes}'
      }
    ],
  ],
};
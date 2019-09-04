require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-flat-list"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = package["description"]
  s.homepage     = "https://github.com/github_account/react-native-flat-list"
  s.license      = "MIT"
  s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = package["author"]
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/github_account/react-native-flat-list.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
	
  # s.dependency "..."
end
